function showGraphQLData() {
    const query = `
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
    `;
}

fetch("https://et-vinimport.myshopify.com/api/2022-04/graphql.json", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        query
    })
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data)
})

showGraphQLData();