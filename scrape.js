var axios = require("axios");
var cheerio = require("cheerio");
var request = require("request");
request(
  "https://www.amazon.com/gp/site-directory?ref_=nav_em_T1_0_2_2_37__fullstore",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      console.log(html);
    }
  }
);

//.then(function(response) {
// Load the html body from axios into cheerio
//var $ = cheerio.load(response.data);
// Load the HTML into cheerio and save it to a variable
// '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'

// An empty array to save the data that we'll scrape

//var aContainer = $(".a-container");
//console.log(aContainer);
