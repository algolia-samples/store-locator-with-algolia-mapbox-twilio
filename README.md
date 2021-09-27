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

Copy the file `.local.env` to the directory and provide the right values 

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

## Ressources 

- 📺 [Watch the livecoding on Youtube](https://discourse.algolia.com/t/building-a-store-locator-in-react-using-algolia-mapbox-and-twilio/12867/4?u=alex)
- 📰 [Read Blog post #1](https://www.algolia.com/blog/engineering/building-a-store-locator-in-react-using-algolia-mapbox-and-twilio-part-1/)
- 📰 [Read Blog post #2](https://www.algolia.com/blog/engineering/building-a-store-locator-in-react-using-algolia-mapbox-and-twilio-part-2)
- 📰 Read Blog post #3 : soon



## Authors & Maintainers 

| | Name | Social links | |
| ---| --- |  --- |  --- |
|![](https://github.com/csauvage.png?size=30)| Clément SAUVAGE |  [Github](https://github.com/csauvage) - [Twitter](https://twitter.com/clementsauvage) |
|![](https://github.com/seafoox.png?size=30)| Alexandre COLLIN | [Github](https://twitter.com/seafoox) - [Twitter](https://twitter.com/alexandrecollin) | ![](./git_assets/alg_icon.svg)
|<img src="https://unavatar.vercel.app/twitter/juliereboul" width="30" height="30">| Julie REBOUL | [Twitter](https://twitter.com/juliereboul) | ![](./git_assets/alg_icon.svg)




