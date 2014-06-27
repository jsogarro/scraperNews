var request = require('request');
var cheerio = require('cheerio');

// Make request to Hacker News
request('https://news.ycombinator.com', function(err, res, html) {
  if(!err && res.statusCode === 200) {
    
    // load html to Cheerio
    var $ = cheerio.load(html);

    $('span.comhead').each(function(i, element) {
    	var a = $(this).prev();

    	var title = a.text();
    	var url = a.attr('href');


    	var story = {
    		title: title,
    		url: url 
    	};

    	console.log(story);
    })

  } else {
  	console.log(err);
  }
});
