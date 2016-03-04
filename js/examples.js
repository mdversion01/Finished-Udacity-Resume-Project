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