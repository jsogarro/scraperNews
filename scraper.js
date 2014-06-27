var request = require('request');
var cheerio = require('cheerio');

// Make request to Hacker News
request('https://news.ycombinator.com', function(err, res, html) {
  if(!err && res.statusCode === 200) {
    console.log(html);
  }
  console.log(err);
});
