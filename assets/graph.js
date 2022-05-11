const productQuery = () => `
  query {
    products(first: 250) {
        edges {
            node {
            id
            title
            tags
            }
        }
    }
}
`;

const STOREFRONT_ACCESS_TOKEN =  process.env.SHOPIFY_API_KEY;
const GRAPHQL_URL = 'https://et-vinimport.myshopify.com/api/2022-04/graphql.json';
let allProducts;
const GRAPHQL_BODY  = () => {
	return {
	'async': true,
	'crossDomain': true,
	'method': 'POST',
	'headers': {
		'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
		'Content-Type': 'application/graphql',
        'Accept': 'application/json'
	},
	'body': productQuery()
	};
}

async function getProducts() {
    await fetch(GRAPHQL_URL, GRAPHQL_BODY())
    .then(res => res.json())
    .then(data => {
        allProducts = JSON.stringify(data.data.products.edges)
        console.log(allProducts)
    })
}

getProducts();

