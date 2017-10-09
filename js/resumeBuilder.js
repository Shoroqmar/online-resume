/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio ={ 
    "name" : "Shoroq",
    "role" : "Designer",
    "contact" :{ 
          "mobile"  : "0583848505",
          "email"   : "shoroqmarshoud94@gmail.com", 
          "github"  : "Shoroqmar",
          "twitter" : "Shoroq_moh",
          "location": "Saudi Arabia" } , 
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
		
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
      } 
};

 var education = {
       "schools" : [
           {"name": "An-Najah"},
           {"location": "Nablus - Palestine"},
           {"degree": "Bachelor"},
           {"majors": ["CIS"]},
           {"dates": "2017"},
           {"url" : "https://www.najah.edu/en/academic/undergraduate-programs/program/computer-information-systems/info-card/"}],
                       
      "onlineCourses":[
         {"title": "Product Design" } ,
         {"school": "Udacity" } ,
         {"dates": "2017" },
         {"url": "https://www.udacity.com/course/product-design--ud509" }]
         
               } ; 
education.display = function() { 
    var formattedsName = HTMLschoolName.replace("%data%",education.schools.name);
    $("#education").append(formattedName);
    var formattedLocation =HTMLschoolLocation.replace("%data%",education.schools.Location);
    $("#education").append=HTMLschoolDegree.replace("%data%",education.schools.Degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools.majors);
      $("#education").append(formattedMajor);

  var formattedDates = HTMLschoolDates.replace("%data%", education.schools.dates);
      $("#education").append(formattedDates);

  $("#education").append(HTMLonlineClasses);

  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
      $("#education").append(formattedTitle);

  var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
      $("#education").append(formattedSchool);

  var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
      $("#education").append(formattedDates);

  var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
      $("#education").append(formattedURL);


 



};


education.display(); 


var work = { 
        "jobs":[
                {"employer": "Freelancing" } ,
            {"title": "Designer"} ,
           {"location": "Earth"}, 
           {"dates": "2017"},
           {"description": "Graphic designer and UI/UX designer"} ], 
      "display": function(){
          var formattedEmployer =HTMLjobsEmployer.replace("%data%",work.jobs.employer);
          $("#work").append(formattedEmployer);
          var formattedTitle = HTMLjobsTitle.replace("%data%",work.jobs.title);
          $("#work").append(formattedTitle);
          var formattedLocation = HTMLjobsLocation.replace("%data%",work.jobs.location);
          $("#work").append(formattedLocation);
          var formattedDates = HTMLjobsDates.replace("%data%",work.jobs.dates);
          $("#work").append(formattedDates);
          var formattedDescription = HTMLjobsDescription.replace("%data%",work.jobs.description);
          $("#work").append(formattedDescription);
      }
};



var project = { 
    
    "projects":[
            {"title":"Protfolio"} , 
            {"dates":"2017"},
            {"description": "Responsive site"},
            {"images":["http://shoroqteadiary.eb2a.com/?i=1"]}
                ],

    "display" : function(){
         var formattedTitle = HTMLprojectsTitle.replace("%data%",project.projects.title);
              $("#project").append(formattedTitle); 
        var formattedDates = HTMLprojectsDates.replace("%data%",project.projects.dates);
              $("#project").append(formattedDates); 
        var formattedDescription  = HTMLprojectDescription.replace("%data%",project.projects.description);
            $("#project").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%",project.projects.image);
            $("#project").append(formattedImage)


    } 
};


$("#mapDiv").append(googleMap);







