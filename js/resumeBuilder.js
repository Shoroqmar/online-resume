/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio ={ 
    "name" : "Shoroq",
    "role" : "Designer",
    "contacts" : { 
          "mobile"  : "0583848505",
          "email"   : "shoroqmarshoud94@gmail.com", 
          "github"  : "Shoroqmar",
          "twitter" : "Shoroq_moh",
          "location": "Saudi Arabia" }, 
    "welcomeMessage": "Hello People ",
    "skills" :["Graphic Design" , "Design Thinking" , "Leadership","Communication"],
    "biopic": "images/shoroq.jpg",
    "display" : function() {
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHeaderRole);
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedHeaderName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);
		

			$("#header").append(HTMLskillsStart);
        for (var i =0 ;i<bio.skills.length;i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);			
		}
      } 
};
bio.display();

var work = { 
        "jobs":[
            {"employer": "Freelancing" ,
           "title": "Designer" ,
           "location": "Palestine", 
           "dates": "2017",
           "description": "Graphic designer and UI/UX designer"}
        ], 
      "display": function(){
            $("#header").append(HTMLworkStart);
for ( var i =0 ;i<work.jobs.length;i++){

          var formattedEmployer =HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
          $("#work").append(formattedEmployer);
          var formattedjobTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
          $("#work").append(formattedjobTitle);
          var formattedjobLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
          $("#work").append(formattedjobLocation);
          var formattedjobDate = HTMLworkDates.replace("%data%",work.jobs[i].dates);
          $("#work").append(formattedjobDate);
          var formattedjobDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
          $("#work").append(formattedjobDescription);
      }
}
};
work.display();

var project = { 
    
    "projects":[
            {"title":"Protfolio" , 
            "dates":"2017",
            "description": "Responsive site",
            "images":["http://shoroqteadiary.eb2a.com/?i=1"]}
                ],

    "display" : function(){
         $("#header").append(HTMLprojectStart);
for ( var i =0 ;i<project.projects.length;i++){
         var formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
              $("#project").append(formattedprojectTitle); 
        var formattedprojectDate = HTMLprojectDates.replace("%data%",project.projects[i].dates);
              $("#project").append(formattedprojectDate); 
        var formattedprojectDescription  = HTMLprojectDescription.replace("%data%",project.projects[i].description);
            $("#project").append(formattedprojectDescription);
        var formattedImage = HTMLprojectImage.replace("%data%",project.projects[i].image);
            $("#project").append(formattedImage);


    } 
}};
project.display();

 var education = {
       "schools" : [
           {"name": "An-Najah",
           "location": "Nablus - Palestine",
           "degree": "Bachelor",
           "majors": ["CIS"],
           "dates": "2017",
           "url" : "https://www.najah.edu/en/academic/undergraduate-programs/program/computer-information-systems/info-card/"
           }],
                       
      "onlineCourses":[
       { "title": "Product Design",
         "school": "Udacity"  ,
         "dates": "2017" ,
         "url": "https://www.udacity.com/course/product-design--ud509" }]
         
               } ; 
education.display = function() {
        $("#header").append(HTMLschoolStart);

for ( var i =0 ;i<education.schools.length;i++){

    var formattedsName = HTMLschoolName.replace("%data%",education.schools[i].name);
    $("#education").append(formattedsName);
    var formattedLocation =HTMLschoolLocation.replace("%data%",education.schools[i].Location);
    $("#education").append(formattedLocation);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].Degree);
    $("#education").append(formattedDegree);
//    for (var j=0; j<education.schools.majors.length;j++){
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $("#education").append(formattedMajor);
    ;
  var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $("#education").append(formattedschoolDates);
     var formattedschoolURL = HTMLschoolurl.replace("%data%", education.schools[i].url);
      $("#education").append(formattedschoolURL);
    

};
for ( var i =0 ;i<education.onlineCourses.length;i++){
  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      $("#education").append(formattedTitle);

  var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      $("#education").append(formattedSchool);

  var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $("#education").append(formattedonlineDates);

  var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $("#education").append(formattedURL);

};
 



};


education.display(); 


   
$("#mapDiv").append(googleMap);







