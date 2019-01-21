var newwindow;

function poptastic(url)
{
	newwindow=window.open(url,'name','height=400px,width=600px');
	if (window.focus) {
		newwindow.focus();
	}
}

var xmlWFHttp = null;

function WFProcessRequest() 
{
    if ( xmlWFHttp.readyState == 4 ) {
	document.getElementById("windfindercell").innerHTML = xmlWFHttp.responseText;
    }
}

function httpWFGet(theUrl)
{
    xmlWFHttp = new XMLHttpRequest();
    xmlWFHttp.onreadystatechange = WFProcessRequest;
    xmlWFHttp.open( "POST", theUrl, true );
    xmlWFHttp.send( null );
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function resetNav(evt) {
    evt.currentTarget.style.backgroundColor = "#ADDFFF";

}

function openNav(evt, navname) {
    var i, navcontent, navlinks;
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    document.getElementById(navname).style.display = "block";
    evt.currentTarget.className += " active";
}

function openOneNav(evt, navname) {
    var i, navcontent, navlinks;
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    document.getElementById(navname).style.display = "block";
}

function openAllNav(evt) {
    var i, navcontent, navlinks, coursecontent;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "block";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className += " active";
    }
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "block";
    }
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className  += " active";
    }
}
function openCourse(evt, coursename) {
    var i, coursecontent, courselinks;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "none";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    document.getElementById(coursename).style.display = "block";
    evt.currentTarget.className += " active";
}
function openOneCourse(evt, coursename) {
    document.getElementById(coursename).style.display = "block";
}
function openNavCourse(evt, coursename) {
    var i, navcontent, navlinks, coursecontent, courselinks;
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "none";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    document.getElementById("courses").style.display = "block";
    document.getElementById(coursename).style.display = "block";
}
function openAllCourses(evt) {
    var i, coursecontent, courselinks;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "block";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className += " active";
    }
}
function openIntroCourses(evt) {
    var i, coursecontent, courselinks;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "none";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    /*console.log("openIntroCourses b1");*/
    document.getElementById("boating1").style.display = "block";
    /*console.log("openIntroCourses y");*/
    document.getElementById("youth").style.display = "block";
    /*console.log("openIntroCourses b23");*/
    document.getElementById("boating23").style.display = "block";
    /*console.log("openIntroCourses vhf");*/
    document.getElementById("vhf").style.display = "block";
    evt.currentTarget.className += " active";
}
function openAdvCourses(evt) {
    var i, coursecontent, courselinks;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "none";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    document.getElementById("boating4").style.display = "block";
    document.getElementById("boating5").style.display = "block";
    document.getElementById("boating6").style.display = "block";
    evt.currentTarget.className += " active";
}
function openAdvCourses(evt) {
    var i, coursecontent, courselinks;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "none";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    document.getElementById("boating4").style.display = "block";
    document.getElementById("boating5").style.display = "block";
    document.getElementById("boating6").style.display = "block";
    evt.currentTarget.className += " active";
}
function openElectiveCourses(evt) {
    var i, coursecontent, courselinks;
    coursecontent = document.getElementsByClassName("coursecontent");
    for (i = 0; i < coursecontent.length; i++) {
        coursecontent[i].style.display = "none";
    }
    courselinks = document.getElementsByClassName("courselinks");
    for (i = 0; i < courselinks.length; i++) {
        courselinks[i].className = courselinks[i].className.replace(" active", "");
    }
    /*console.log("openExectiveCourses sail");*/
    document.getElementById("sail").style.display = "block";
    /*console.log("openExectiveCourses maint");*/
    document.getElementById("maint").style.display = "block";
    /*console.log("openExectiveCourses electric");*/

    document.getElementById("electric").style.display = "block";
    /*console.log("openExectiveCourses elec nav");*/
    document.getElementById("electronic_navigation").style.display = "block";
    /*console.log("openExectiveCourses intro");*/
    document.getElementById("intro_weather").style.display = "block";
    /*console.log("openExectiveCourses fun");*/
    /*document.getElementById("fun_weather").style.display = "block";*/
    /*document.getElementById("global_weather").style.display = "block";*/
    evt.currentTarget.className += " active";
}

function openDefaultPage()
{
	var i, navcontent, navloc, cstr;
	/*console.log("in startup script navloc=");*/
	navloc = getQueryVariable("page");
	/* console.log(navloc); */
	if (navloc == false) {
		/* console.log("in startup here1"); */
		document.getElementById("defaultOpen").click();
	}
	else if ((navloc == "news") ||
			 (navloc == "faq") ||
			 (navloc == "toonie") ||
			 (navloc == "courses") ||
			 (navloc == "pcoc") ||
			 (navloc == "weather") ||
			 (navloc == "benefits") ||
			 (navloc == "executive") ||
			 (navloc == "pictures") ||
			 (navloc == "history") ||
			 (navloc == "links") ||
			 (navloc == "forsale") ||
			 (navloc == "contacts")) {
		/* console.log("in startup here2 cstr=");*/
	    cstr = "c";
	    cstr = cstr.concat(navloc);
	    console.log(cstr);
  		navcontent = document.getElementsByClassName(cstr);
   		for (i = 0; i < navcontent.length; i++) {
   			console.log("doing click");
      			navcontent[0].click();
   		}
	}
	else if ((navloc  == "boating1") ||
			 (navloc  == "youth") ||
			 (navloc  == "boating23") ||
			 (navloc  == "boating4") ||
			 (navloc  == "boating5") ||
			 (navloc  == "boating6") ||
			 (navloc  == "vhf") ||
			 (navloc  == "sail") ||
			 (navloc  == "maint") ||
			 (navloc  == "electric") ||
			 (navloc  == "electronic_navigation") ||
			 (navloc  == "intro_weather") ||
			 (navloc  == "fun_weather") ||
			 (navloc  == "global_weather")) {
	 	/*console.log("in startup here3 doing ccourses");*/
	 	navcontent = document.getElementsByClassName("ccourses");
   		for (i = 0; i < navcontent.length; i++) {
   			/*console.log("doing click");*/
    		navcontent[0].click();
   		}
	 	/*console.log("in startup here3 doing open, cstr=");*/
		/*openNavCourse(null, navloc);*/
		cstr = "c";
	    cstr = cstr.concat(navloc);
	    /*console.log(cstr);*/
  		navcontent = document.getElementsByClassName(cstr);
   		for (i = 0; i < navcontent.length; i++) {
    		/*console.log("doing click");*/
    		navcontent[0].click();
   		}
	}
	else {
		/*console.log("no match doing default");*/
		document.getElementById("defaultOpen").click();
	}			
}
