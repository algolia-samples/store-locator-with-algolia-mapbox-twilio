![](./git_assets/cover.png)
#Store Locator with "Buy Online, Pickup at Store" capability, using Algolia, Mapbox and Twilio

This sample app leverage Algolia with Instant Search, Autocomplete and Mapbox

## Features

The sample app uses the following features :

- Algolia Instant Seach React : [📘](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- Algolia Autocomplete : [📘](https://alg.li/autocomplete)
- Mapbox GL.js : [📗](https://docs.mapbox.com/mapbox-gl-js/api/)
- Mapbox Geocoding API : [📗](https://docs.mapbox.com/api/search/geocoding/)
- Twilio Programmable SMS : [📕](https://www.twilio.com/sms)  
- Clever Cloud : [📙](https://www.clever-cloud.com/en/)

## Demo (Try it yourself!)

The project demo has been deployed on Clever-cloud, you can find it here (the SMS feature has been removed for obvious reasons)

[Access the demo](https://algolia-store-locator.cleverapps.io/)

![](./git_assets/powered_by.svg)

## How to run the sample app locally

The sample app implements the front-end in React, so you'll need nothing installed on your machine except Node & npm / yarn

### 1. Clone this repository

```
git clone https://github.com/algolia-samples/store-locator-with-algolia-mapbox-twilio
```

Copy the file `.local.env` to the directory 

```bash
# TAKEN FROM YOUR ALGOLIA DASHBOARD 
REACT_APP_ALGOLIA_APP_ID='' 
REACT_APP_ALGOLIA_API_KEY=''
REACT_APP_ALGOLIA_INDEX_NAME=''

# TAKEN FROM YOUR MAPBOX CONSOLE
REACT_APP_MAPBOX_TOKEN=''

# TAKEN FROM YOUR TWILIO FUNCTION SERVICE
REACT_APP_TWILIO_FUNCTION_URL=''
```

### 2. Run it 

`yarn dev`



## Authors & Maintainers 

| | Name | Twitter |
| ---| --- | --- |
|![](https://github.com/csauvage.png?size=30)| Clément SAUVAGE | [@clementsauvage](https://twitter.com/clementsauvage) |
|![](https://github.com/seafoox.png?size=30)| Alexandre COLLIN | [@alexandrecollin](https://twitter.com/alexandrecollin) |
|<img src="https://unavatar.vercel.app/twitter/juliereboul" width="30" height="30">| Julie REBOUL | [@juliereboul](https://twitter.com/juliereboul) |




