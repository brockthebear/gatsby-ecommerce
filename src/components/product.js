import React, { useState } from "react"

const Product = ({ skus, product }) => {
	const [sku, setSku] = useState(skus[0].node.id)
	const stripe = window.Stripe("pk_test_8rRRXUDrHKcCfpaD1vZMBrLm00HjxpBJGh")

	const placeOrder = () => {
		stripe.redirectToCheckout({
			items: [
				{
					sku,
					quantity: 1,
				},
			],
			successUrl: "http://localhost:8000/success",
			cancelUrl: "http://localhost:8000/cancel",
		})
	}

	return (
		<div>
			<article>
				<img src="https://picsum.photos/340/500" alt="Gatsby Store Image" />
				<h3>{product.node.name}</h3>
				<select value={sku} onChange={e => setSku(e.target.value)}>
					{skus.map(edge => (
						<option key={edge.node.id} value={edge.node.id}>
							{edge.node.attributes.name}
						</option>
					))}
				</select>
				<button onClick={placeOrder}>Buy Me</button>
			</article>
		</div>
	)
}

export default Product
