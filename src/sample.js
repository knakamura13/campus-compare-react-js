'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '5PhACrZEOw4XW_8PBt8VxZTc7ZYkLpatvmNVJLKG60slfnAj_I3ajJfnriq2ZTM_hLSaDyFH2yIJ0by6TZqvwtCPqaRgDunoMdjFLtV4HpQtYYPWSG06nWa-JqDvW3Yx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});