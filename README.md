# etvinimport

## Login to Shopify account
Login to Shopify account using the Shopify CLI command: 

	shopify login [--store <DOMAIN>]


### Serve local environment: 
When logged in to Shopify account, you can run a local dev environment using:

    npm run dev

This will run Gulp tasks watching for changes to .scss-files in /styles and will compile these to .css-files in /assets. 
