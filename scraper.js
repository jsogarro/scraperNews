var request = require('request');
var cheerio = require('cheerio');
var prompt = require('prompt');
var spawn = require('child_process').spawn;

// Make request to Hacker News
request('https://news.ycombinator.com', function(err, res, html) {
  if(!err && res.statusCode === 200) {
    
    // load html to Cheerio
    var $ = cheerio.load(html);
    var stories = [];

    $('span.comhead').each(function(i, element) {
    	var a = $(this).prev();
    	var title = a.text();
    	var url = a.attr('href');

    	var story = {
    		number: i +1,
    		title: title,
    		url: url 
    	};

    	// Add each story object to the stories array
    	stories.push(story);
     	console.log(stories);

     	// Print story to the console
     	for (story in stories) {
     		var story = stories[story];

     		console.log(story.number + ') ' + story.title);
     		console.log(story.url);
     		console.log("________");
     	}

    });
    	// Prompt user to select story
    	console.log("Select a story number to view");

    	prompt.start();
    	prompt.get(['storyChoice'], function(err, result) {

    		console.log(result);
    		console.log(result.storyChoice);

    		var url = stories[result.storyChoice - 1].url;
    		openURL(url);	
    	});
    	
  } else {
  	// log an error if we get one when trying to connect
  	console.log(err);
  }
});

var openURL = function openURL(url) {
	spawn('open', [url]);
}