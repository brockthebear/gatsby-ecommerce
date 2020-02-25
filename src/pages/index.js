import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
	const stripe = window.Stripe("pk_test_8rRRXUDrHKcCfpaD1vZMBrLm00HjxpBJGh")
	stripe.redirectToCheckout({
		items: [
			{
				sku: "sku_Gn7YG0kQOb16zR",
				quantity: 1,
			},
		],
		successUrl: "http://localhost:8000",
		cancelUrl: "http://localhost:8000",
	})
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	)
}

export default IndexPage
