const express = require('express');
const app = express();

// Define the search route
app.get('/search', (req, res) => {
  // Get the search query from the request parameters
  const query = req.query.search;

  // Call a function to perform the search
  const results = searchFunction(query);

  // Send the search results as a JSON response
  res.json({ results });
});

// Define the search function
function searchFunction(query) {
  // Perform the search using the query
  // Send search to video metadata
  // {
  //   "Title": "Fight Club"
  // }
  // or
  // {
  //   "Author": "Tarantino"
  // }
  // fetch ("/VideoMetadataMS/search")
  // method "GET"
  results = {results: "results"}
  return results;
}

// Start the server
app.listen(3000, () => {
  console.log('Search microservice started on port 3000');
});
