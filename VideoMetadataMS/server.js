const express = require('express');
const app = express();

// Should be connected to a database

app.get('/search', (req, res) => {
  const query = req.query.search;

  // search database
  results = {results: "results"}

  // Send the search results as a JSON response
  res.json({ results });
});


app.post('/review', (req, res) => {

    const target = req.body.reviewtarget
    const review = req.body.review

    // update database

    if (True)
        res.json({status: "success"})
    else
        res.json({status: "fail"})

});

app.get('/mainpagevideometadata', (req, res) => {
    const targets = req.body.targets

    // search database with targets
    results = {results: "results"}

    res.json({ results });
});

// Start the server
app.listen(4000, () => {
  console.log('Video metadata microservice started on port 4000');
});
