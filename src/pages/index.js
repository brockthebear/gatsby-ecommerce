import React from "react"

import Layout from "../components/layout"
import Products from "../components/products"
import SEO from "../components/seo"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Demo Gatsby Store</h1>
			<div>
				<Products />
			</div>
		</Layout>
	)
}

export default IndexPage
