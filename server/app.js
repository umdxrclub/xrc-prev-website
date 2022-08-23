const express = require('express');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
const parseString = require('xml2js').parseString;
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
var server = app.listen(port, () => console.log(`Listening on port ${port}`));

// sample GET route
app.get('/sample', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

// Get MailChimp RSS feed
app.get('/xreport-rss', async (req, res) => { 
    
    const FEED_URL = "https://us19.campaign-archive.com/feed?u=ec383b1ee117d6a39daa338a1&amp;id=68057666d1";
    const ONLINE = true;

    if (ONLINE) {
        axios.get(FEED_URL)
            .then(response => {
                parseString(response.data, function (err, results) {
                    res.send(results);
                });
            })
            .catch(error => {
                res.redirect('/xreport-backup');
            });
    } else {
        res.redirect('/xreport-backup');
    }
});

app.get('/xreport-backup', async (req, res) => {
    const FILENAME = path.join(__dirname) + "/feed-backup.xml";
    fs.readFile(FILENAME, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        parseString(data, function (err, results) {
            res.send(results);
        });
    });
});