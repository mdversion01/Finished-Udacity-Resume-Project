// EXAMPLES OF SCRIPTING

/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Mathew Daugherty");



/* QUIZ

var au = "audacity";

var ud = function(s) {
    
    au = au[1].toUpperCase() + au.slice(2);

	return au;
}

console.log(ud(au));



var bio = {
	"name": "Mathew Daugherty",
	"role": "Front-End Web Developer",
	"contact": {
		"mobile":"703-627-6663",
		"email":"mathewdaugherty@mac.com",
		"twitter":"@mdversion01",
		"location":"Reston, VA"
},
	"url": "http://www.picture.com",
	"welcome": "Hello, my name is....",
	"skills": ["Design", "HTML", "CSS", "Javascript"],
	"bioPic":"images/fry.jpg"
};

var work ={};
work.position = "Web Designer, Front-End Developer";
work.employer = "Booz";
work.years = "1 year";
work.city = "Reston";

//var education = {};
//education["school"] = "VCU";
//education["city"] = "Richmond";

//$('#main').append(work["position"]);
//$('#main').append(education.school);


var education = {
	"schools": [
     { 
           "name" : "VCU",
           "location" : "Richmond, VA",
           "degree" : "Bachelor's of Fine Art",
           "majors" : "Painting and Printmaking",
           "minors" : "none",
           "dates" : 1993,
           "onlineCourse" : "Udacity - Javascript Basics"
     }

	]
}
*/

/* Replacing < & > on URL's */

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};


// Did your code work? The line below will tell you!
console.log(charEscape(html));


//JB Quiz 1


var getRelationship = function(x, y) { 
 
 
   // If both arguments are numbers 
   if ( !isNaN(x) && !isNaN(y) ) { 
 
 
     if ( x == y ) {                // if they are equal, return '=' 
       return '=='; 
 
 
     } else {                       // if not, return comparison operator 
       return x < y ? '<' : '>'; 
     } 
 
 
     // Return error if both arguments are not numbers 
   } else if ( isNaN(x) && isNaN(y) ) { 
     return errorMsg + x + ' and ' + y + ' are not numbers'; 
 
 
     // Return error if one of arguments is not a number 
   } else { 
     return isNaN(x) ? errorMsgFor(x) : errorMsgFor(y); 
   } 
 }; 
  
 
 // Error message base 
 var errorMsg = 'Can\'t compare relationships because '; 
 
  
 
 // Return error message for one argument 
 var errorMsgFor = function(invalidArg) { 
   return errorMsg + invalidArg + ' is not a number'; 
 }; 
 
 

 
 // Try logging these functions to test your code! 
 console.log(getRelationship(1,4)); 
 console.log(getRelationship(1,1)); 
 console.log(getRelationship("that",2)); 
 console.log(getRelationship("this"," something else")); 
 console.log(getRelationship(3)); 
 console.log(getRelationship("hi")); 
 console.log(getRelationship(NaN)); 
 console.log(getRelationship(NaN, undefined)); 


// Quiz 2

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];


function alphabetizer(names) {
  var namesLength = names.length;                  // To avoid multiple calculations in for-loop
  var sortedNames = [];                            // New local array to save results of for-loop

  for (var i = 0; i < namesLength; i++) {          // Iterate through array to modify each name
    sortedNames.push( names[i].split(' ').reverse().join(', ') );
  }
  
  return sortedNames.sort();                       // Return alphabetically sorted array
}


// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));


//Quiz 3

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {

  var ruleResults = results.formattedResults.ruleResults;
  var localizedRuleNamesArray = [];

  for (var key in ruleResults) {

    // Iterate through object's own properties only
    if ( ruleResults.hasOwnProperty(key) ) {
      localizedRuleNamesArray.push( ruleResults[key].localizedRuleName );
    }
  }

  return localizedRuleNamesArray;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {

  var pageStats = results.pageStats;
  var totalBytesSum = 0;

  for (var key in pageStats) {

    // Iterate through object's own properties only
    // and if they contain 'Bytes' in their title

    if ( pageStats.hasOwnProperty(key) && keyContainsString(key, 'Bytes') ) {
      totalBytesSum += +pageStats[key];
    }
  }

  return totalBytesSum;
}

var keyContainsString = function(key, string) {
  return key.indexOf(string) > -1;
};

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
  "kind": "pagespeedonline#result",
  "id": "/speed/pagespeed",
  "responseCode": 200,
  "title": "PageSpeed Home",
  "score": 90,
  "pageStats": {
    "numberResources": 22,
    "numberHosts": 7,
    "totalRequestBytes": "2761",
    "numberStaticResources": 16,
    "htmlResponseBytes": "91981",
    "cssResponseBytes": "37728",
    "imageResponseBytes": "13909",
    "javascriptResponseBytes": "247214",
    "otherResponseBytes": "8804",
    "numberJsResources": 6,
    "numberCssResources": 2
  },
  "formattedResults": {
    "locale": "en_US",
    "ruleResults": {
      "AvoidBadRequests": {
        "localizedRuleName": "Avoid bad requests",
        "ruleImpact": 0.0
      },
      "MinifyJavaScript": {
        "localizedRuleName": "Minify JavaScript",
        "ruleImpact": 0.1417,
        "urlBlocks": [
          {
            "header": {
              "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
              "args": [
                {
                  "type": "BYTES",
                  "value": "1.3KiB"
                },
                {
                  "type": "INT_LITERAL",
                  "value": "0"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3% reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                    },
                    {
                      "type": "BYTES",
                      "value": "717B"
                    },
                    {
                      "type": "INT_LITERAL",
                      "value": "1"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3% reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                    },
                    {
                      "type": "BYTES",
                      "value": "258B"
                    },
                    {
                      "type": "INT_LITERAL",
                      "value": "0"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "SpriteImages": {
        "localizedRuleName": "Combine images into CSS sprites",
        "ruleImpact": 0.0
      }
    }
  },
  "version": {
    "major": 1,
    "minor": 11
  }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
