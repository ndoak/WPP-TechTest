const getMediaIdFromUrl = () => {
  const query = new URLSearchParams(window.location.search);
  return query.get('mediaId');
}

const fetchData = () => {
  var baseUrl = 'https://www.cbc.ca/bistro/order?mediaId='
  var mediaUrl = baseUrl + getMediaIdFromUrl();
  fetch(mediaUrl)
      .then((response) => {
          if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
              return;
          }
          response.json().then((data) => {
              document.getElementById("video").src = data.items[0].assetDescriptors[1].key;
              document.getElementById("description").innerHTML = "Description: " + data.items[0].description;
              document.getElementById("title").innerHTML = "Title: " + data.items[0].title
          });
      })
      .catch((err) => {
          return console.log('Fetch Error', err);
      });
}
fetchData()
