// /*
// This is empty on purpose! Your code to build the resume will go here.
//  */
//  var awesomeThoughts = "I am Pippo and I am AWESOME!";

// var email = "pippo@udacity.com";

// var newEmail = email.replace("udacity", "gmail");

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// var formattedName = HTMLheaderName.replace('%data%', 'Pippo');
// var formattedRole = HTMLheaderRole.replace('%data%', 'Programmer');

// // $("#header").prepend(formattedRole);
// // $("#header").prepend(formattedName);

// var bio = {
//   "name" : "Pippo",
//   "role" : "Programmer",
//   "contact" : {
//     "mobile" : "1-123-345-000",
//     "email" : "pippo@udacity.com",
//     "location" : "New York"
//   },
//   "picture" : "images/fry.jpg",
//   "welcome" : "Welcome!",
//   "skills" : ["Java", "C++", ".NET"],
//   "work" : {
//     "position" : "Chief Programmalyst",
//     "employer" : "Spectre",
//     "years" : 6,
//     "city" : "Albuquerque"
//   },
//   "education" : {
//     "school" : "Spectre School",
//     "years" : 123,
//     "city" : "ChinaTown"
//   }
// };

var work = {
  "jobs" : [
  {
    "employer" : "Big Company",
    "title" : "Boss",
    "location" : "Bologna, Italy",
    "dates" : "1983-1991",
    "description" : "be the boss"
  },
  {
    "employer" : "Huge Company",
    "title" : "Worker",
    "location" : "Milan, Italy",
    "dates" : "1991-1997",
    "description" : "be a worker"
  }
  ]
};

var projects = {
  "projects" : [
  {
    "title" : "Big Project",
    "dates" : "1983-1991",
    "description" : "an interesting project",
    "images" : [
    "http://placehold.it/350x150",
    "http://placehold.it/350x100",
    "http://placehold.it/200x150"
    ]
  },
  {
    "title" : "Mega Project",
    "dates" : "1994-1998",
    "description" : "a less interesting project",
    "images" : [
    "http://placehold.it/350x150",
    "http://placehold.it/350x100",
    "http://placehold.it/200x150"
    ]
  }
  ]
};

var bio = {
  "name" : "John Doe",
  "role" : "Programmer",
  "picture" : "images/fry.jpg",
  "contacts" : {
    "mobile" : "1-123-345-000",
    "email" : "pippo@udacity.com",
    "location" : "Rome, Italy"
  },
  "welcomeMessage" : "Welcome to my Resume!",
  "skills" : ["Java", "C++", ".NET"]
};

var education = {
  "schools" : [
    {
      "name" :  "Big College",
      "location" : "Milan, Italy",
      "degree" : "BA",
      "major" : ["First", "Second"]
    },
    {
      "name" :  "Huge College",
      "location" : "Turin, Italy",
      "degree" : "Masters",
      "major" : ["First", "Second"]
    }
  ]
};

// $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome));
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#header").append(HTMLbioPic.replace('%data%', bio.picture));
    $("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (!bio.skills.empty) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        };
    };
}

bio.display();

work.display = function()
{
  for (job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(
      HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
      HTMLworkTitle.replace("%data%", work.jobs[job].title) +
      HTMLworkDates.replace("%data%", work.jobs[job].dates) +
      HTMLworkLocation.replace("%data%", work.jobs[job].location) +
      HTMLworkDescription.replace("%data%", work.jobs[job].description)
      );
  }
}

work.display();

$(document).ready(function () {
  $(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
  });
});

// $("#main").append(internationalizeButton);

function inName(name)
{
  var splitted = name.trim().split(" ");
  var firstName = splitted[0];
  var capitalizedFirstName = firstName.slice(0,1).toUpperCase() +
  firstName.slice(1);

  var lastName = splitted[1];
  var capitalizedLastName = lastName.toUpperCase();

  return (capitalizedFirstName + " " + capitalizedLastName);
}

projects.display = function() {
    for (p in projects.projects)
    {
      var project = projects.projects[p];

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

      for (i in project.images)
      {
        var image = project.images[i];
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
      }

    }
}

projects.display();

$("#mapDiv").append(googleMap);
