# Store Locator with "Buy Online, Pickup at Store" capability, using Algolia, Mapbox and Twilio

This sample app implements ....

## Features

The sample app uses the following features:

- REPLACE ME 🤖 Chatbot building made easy with [Google Cloud Dialogflow](https://cloud.google.com/dialogflow/)

  The sample app uses [Dialogflow Messenger](https://cloud.google.com/dialogflow/es/docs/integrations/dialogflow-messenger), a visual chatbot interface (**1**). A [webhook service](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook) sends the question to Algolia Answers, which handles all user intents (questions).

- - REPLACE ME 🧠 Semantic understanding using [Algolia Answers](https://resources.algolia.com/guides/guide-algolia-answers)

  The heavy lifting is performed by Algolia Answers (**3**), Algolia's semantic search API. Answers [combines information from the search index](https://www.algolia.com/doc/guides/algolia-ai/answers/), such as relevance, synonyms, or rules, and applies semantic understanding of small snippets to rank which snippet best answers the question (**4**). You don't have to train anything!

  Conventionally, you have to train Dialogflow by providing [training phrases and their variations](https://cloud.google.com/dialogflow/es/docs/tutorials/build-an-agent/create-customize-agent) together with matching responses.

  You can also integrate Algolia Answers into existing chatbots by directing only a part of user intents to Algolia Answers while other intents are handled elsewhere. Instead of Dialog Messenger, you can also choose other chatbot interfaces, or implement your own.

- REPLACE ME 📈 Data from the [World Health Organization's FAQ on Covid-19 vaccines](<https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines>)

## Demo (Try it yourself!)

<img src="demo/demo.gif?raw=true" alt="A short movie displaying the Algolia COVID-19 Vaccines chatbot" align="center" width="400">

[Access the demo](https://ni17w.sse.codesandbox.io/)

## How to run the sample app locally

The sample app implements two servers in these programming languages:

- [Python](server/python)
- [Node.js/JavaScript](server/node)

The [client](client) is a single HTML page with the [Dialogflow Messenger](https://cloud.google.com/dialogflow/es/docs/integrations/dialogflow-messenger).

### 1. Clone this repository

```
git clone https://github.com/algolia-samples/chatbot-with-algolia-answers
```

Copy the file `.env.example` to the directory of the server you want to use and rename it to `.env`. For example, to use the Python implementation:

```bash
cp .env.example server/python/.env
```

### 2. Set up Algolia

To use this sample app, you need an Algolia account. If you don't have one already, [create an account for free](https://www.algolia.com/users/sign-up). Note your [Application ID](https://deploy-preview-5789--algolia-docs.netlify.app/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-with-the-api/#application-id).

In the `.env` file, set the environment variables `ALGOLIA_APP_ID`:

```bash
ALGOLIA_APP_ID=<replace-with-your-algolia-app-id>
```

### 3. Create your Algolia index and upload data

After you set up your Algolia account and Algolia application, [create and populate an index](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/). Or, you can use the same data as the demo, [The World Health Organization COVID-19 FAQs](sample/who-covid-faq.json).

To upload your data, you can use the [Algolia dashboard](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-from-the-dashboard/) or use on of Algolia's [API clients](https://www.algolia.com/developers/#integrations).

After creating the index and uploading the data, set the environment variable `ALGOLIA_INDEX_NAME` in the `.env` file:

```bash
ALGOLIA_INDEX_NAME=<replace-with-your-algolia-index-name>
```

### 4. Set up Algolia Answers

[Follow the instructions](https://www.algolia.com/doc/guides/algolia-ai/answers/#authentication) in Algolia's documentation to set up Algolia Answers for your index. After you added Algolia Answers to your account, set the environment variable `ALGOLIA_API_KEY` in the file `.env`.

```bash
ALGOLIA_API_KEY=<replace-with-your-algolia-api-key-with-algolia-answers-acl>
```

### 5. Create and configure a Dialogflow agent

This sample app uses Google Cloud's [Dialogflow](https://cloud.google.com/dialogflow) to bootstrap the chatbot
and the [fulfillment](https://cloud.google.com/dialogflow/es/docs/fulfillment-overview) webhook feature to connect it to Algolia Answers.

1. [Follow the Dialogflow guide](https://cloud.google.com/dialogflow/es/docs/agents-manage) to create an empty agent.
2. Replace the [default fallback intent](https://cloud.google.com/dialogflow/es/docs/intents-default#fallback) with [the file from the sample](sample/dialogflow-default-fallback-intent.json). The default fallback intent is the answer shown, when the agent couldn't find a matching response.
3. Populate the `agent-id` variable in the [index file](client/index.html)

### 6. Follow the instructions in the server directory

Each server directory has a file with instructions:

- [Node.js](server/node/README)
- [Python](server/python/README)

For example, to run the Python implementation of the server, follow these steps:

```bash
cd server/python # there's a README in this folder with instructions
python3 venv env
source env/bin/activate
pip3 install -r requirements.txt
export FLASK_APP=server.py
python3 -m flask run --port=4242
```

1. Expose your development server to the internet. For example, you can use [ngrok](https://ngrok.com/).
2. [Add the public URL](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook) of the development server to the Dialogflow webhook so it can use it to answer the queries.
3. Enter questions in the chatbot!

## Authors

- [@csauvage](https://twitter.com/clementsauvage)
