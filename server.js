const express = require('express');
const axios = require('axios');
const parseString = require('xml2js').parseString;

const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// sample GET route
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

// Get MailChimp RSS feed
app.get('/xreport-rss', async (req, res) => { 
    
    const FEED_URL = "https://us19.campaign-archive.com/feed?u=ec383b1ee117d6a39daa338a1&amp;id=68057666d1";
    axios.get(FEED_URL)
        .then(response => {
            parseString(response.data, function (err, results) {
                res.send(results);
            });
        })
        .catch(error => {
            res.send(error);
        });

});