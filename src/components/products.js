import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Product from "./product"

const PRODUCTS_QUERY = graphql`
	query AllProducts {
		allStripeSku {
			edges {
				node {
					id
					price
					product {
						id
						name
					}
					attributes {
						name
					}
				}
			}
		}
		allStripeProduct {
			edges {
				node {
					name
					id
				}
			}
		}
	}
`

const Products = () => {
	return (
		<StaticQuery
			query={PRODUCTS_QUERY}
			render={({ allStripeSku, allStripeProduct }) => {
				return allStripeProduct.edges.map(product => {
					const skus = allStripeSku.edges.filter(
						sku => sku.node.product.id === product.node.id
					)
					return <Product key={product.node.id} skus={skus} product={product} />
				})
			}}
		/>
	)
}

export default Products
