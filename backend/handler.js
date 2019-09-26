'use strict';
const HTMLParser = require('node-html-parser');
const axios = require('axios');

function getURLRes(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then(({ data }) => {
      resolve(data);
    })
  });
}

function getOriginFromURL(url) {
  let pathArray = url.split('/');
  let protocol = pathArray[0];
  let host = pathArray[2];
  return protocol + '//' + host;
}

function getImages(urlRes, origin) {
  return new Promise(function (resolve, reject) {
    const root = HTMLParser.parse(urlRes);
    const rawImages = root.querySelectorAll('img');
    const set = new Set();
    const duplicatesSet = new Set();
    for (let ind = 0; ind < rawImages.length; ind++) {
      let imageUrl = rawImages[ind].rawAttributes.src;
      if (!imageUrl.startsWith('http')) {
        imageUrl = origin + '/' + imageUrl;
      }
      if (set.has(imageUrl))
        duplicatesSet.add(imageUrl);
      else
        set.add(imageUrl);

    }
    const images = [];
    const list = Array.from(set);
    for (const imageUrl of list) {
      if (!duplicatesSet.has(imageUrl)) {
        images.push(
          { original: imageUrl }
        );
      }
    }
    resolve(images);
  });
}

async function images(event) {

  const url = event.queryStringParameters['url'];

  console.log('url' + url);

  const urlRes = await getURLRes(url);

  const originUrl = getOriginFromURL(url);
  console.log('originUrl ' + originUrl);

  const extractImages = await getImages(urlRes, originUrl);
  console.log('extractImages' + extractImages);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify(extractImages),
  };
};

module.exports.images = images;