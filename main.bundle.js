
Object.defineProperty(exports, "__esModule", {
  value: true
});


var getMediaIdFromUrl = exports.getMediaIdFromUrl = function getMediaIdFromUrl() {
  var mediaId = window.location.search;
  return mediaId;
};

var fetchData = exports.fetchData = function fetchData() {
  var baseUrl = 'https://www.cbc.ca/bistro/order?';
  var mediaUrl = baseUrl.concat(getMediaIdFromUrl());
  fetch(mediaUrl).then(function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(function (data) {
      document.getElementById("video").src = data.items[0].assetDescriptors[1].key;
      document.getElementById("description").innerHTML = "Description: " + data.items[0].description;
      document.getElementById("title").innerHTML = "Title: " + data.items[0].title;
    });
  }).catch(function (err) {
    return console.log('Fetch Error', err);
  });
};
fetchData();
