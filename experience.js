
//personal

        var userfname = localStorage.getItem("fname");
        var userlname = localStorage.getItem("lname");
        var useremail = localStorage.getItem("mail");
        var userphn = localStorage.getItem("num");
        var userurl = localStorage.getItem("linkk");
        var userlocation = localStorage.getItem("loc");

        document.getElementById("name").innerHTML =
        userfname + " " + userlname;

        // document.getElementById("role").innerHTML =
        // jname;

        document.getElementById("email").innerHTML =
        useremail;

        document.getElementById("phone").innerHTML =
        userphn;

        document.getElementById("url").innerHTML =
        userurl;

        document.getElementById("location").innerHTML =
        userlocation;

        //education

        // College Details
        var deg = localStorage.getItem("degree");
        var clgname = localStorage.getItem("clgname");
        var csyear = localStorage.getItem("csyear");
        var clyear = localStorage.getItem("clyear");
        //var ccgpa = localStorage.getItem("ccgpa");
        //var ctot = localStorage.getItem("ctot");
        var cpercent = localStorage.getItem("cpercent");

        // 12th Details
        var school12 = localStorage.getItem("name");
        var year12 = localStorage.getItem("year");
        //var mark12 = localStorage.getItem("mark");
        //var total12 = localStorage.getItem("tot");
        var percent12 = localStorage.getItem("percent");

        // 10th Details
        var school10 = localStorage.getItem("sname");
        var ssyear = localStorage.getItem("ssyear");
        var slyear = localStorage.getItem("slyear");
        //var smark = localStorage.getItem("smark");
        //var stot = localStorage.getItem("stot");
        var spercent = localStorage.getItem("spercent");
    
        //skill

        var html = localStorage.getItem("html");
        var css = localStorage.getItem("css");
        var javascript = localStorage.getItem("javascript");
        var python = localStorage.getItem("python");
        var sql = localStorage.getItem("sql");
        var othertech = localStorage.getItem("othertech");

        var communication = localStorage.getItem("communication");
        var teamwork = localStorage.getItem("teamwork");
        var creativity = localStorage.getItem("creativity");''
        var adaptability = localStorage.getItem("adaptability");
        var othersoft = localStorage.getItem("othersoft");

        var tamil = localStorage.getItem("tamil");
        var english = localStorage.getItem("english");
        var hindi = localStorage.getItem("hindi");
        var otherlang = localStorage.getItem("otherlang");

        if(deg || clgname || csyear || clyear || cpercent ||
   school12 || year12 || percent12 ||
   school10 || ssyear || slyear || spercent){

document.getElementById("education").innerHTML =
"<b>Degree:</b> " + deg + "<br>" +
"<b>College:</b> " + clgname + "<br>" +
"<b>Duration:</b> " + csyear + " - " + clyear + "<br>" +
"<b>Percentage:</b> " + cpercent + "%<br><br>" +

"<b>Higher Secondary (12th)</b><br>" +
"School: " + school12 + "<br>" +
"Year: " + year12 + "<br>" +
"Percentage: " + percent12 + "%<br><br>" +

"<b>SSLC (10th)</b><br>" +
"School: " + school10 + "<br>" +
"Duration: " + ssyear + " - " + slyear + "<br>" +
"Percentage: " + spercent + "%";

}else{
document.getElementById("education").closest(".education").style.display="none";
}


// TECHNICAL SKILLS
var tech = [];

["html","css","javascript","python","sql","othertech"].forEach(function(key){
    var value = localStorage.getItem(key);
    if(value){
        tech.push(value);
    }
});

if(tech.length > 0){
    document.getElementById("technical").innerHTML = tech.join("<br>");
}else{
    document.getElementById("technical").closest(".technical").style.display="none";
}


// SOFT SKILLS
var soft = [];

["communication","teamwork","creativity","adaptability","othersoft"].forEach(function(key){
    var value = localStorage.getItem(key);
    if(value){
        soft.push(value);
    }
});

if(soft.length > 0){
    document.getElementById("softskill").innerHTML = soft.join("<br>");
}else{
    document.getElementById("softskill").closest(".softskill").style.display="none";
}


// LANGUAGES
var language = [];

["tamil","english","hindi","otherlang"].forEach(function(key){
    var value = localStorage.getItem(key);
    if(value){
        language.push(value);
    }
});

if(language.length > 0){
    document.getElementById("language").innerHTML = language.join("<br>");
}else{
    document.getElementById("language").closest(".language").style.display="none";
}


// PROJECT

var proname = localStorage.getItem("proname") || "";
var prodesc = localStorage.getItem("prodesc") || "";
var tool = localStorage.getItem("tool") || "";

if(proname || prodesc || tool){

var project = "";

if(proname){
project += "<b>Project:</b> " + proname + "<br><br>";
}

if(prodesc){
project += "<b>Description:</b><br>" + prodesc + "<br><br>";
}

if(tool){
project += "<b>Tools:</b> " + tool;
}

document.getElementById("project").innerHTML = project;

}else{
document.getElementById("project").closest(".project").style.display="none";
}

// COURSE
var course = localStorage.getItem("course")||"";
if(course){
document.getElementById("course").innerHTML = course;
}else{
document.getElementById("course").closest(".course").style.display="none";
}

//EXPERIENCE

var role = localStorage.getItem("jname") || "";
var company = localStorage.getItem("company") || "";
var duration = localStorage.getItem("duration") || "";
var description = localStorage.getItem("jdescription") || "";

if(role || company || duration || description){

    document.getElementById("experience").innerHTML =
    "<b>" + role + "</b><br>" +
    company + "<br>" +
    duration + "<br><br>" +
    description;

}else{

    document.getElementById("experience").closest(".experience").style.display = "none";

}

       

    function downloadResume(){

    var resume = document.querySelector(".resume");

    var option = {
    margin: 0,
    filename: "My_Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
        scale: 2,
        useCORS: true
    },
    jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
    },
    pagebreak: {
        mode: ["avoid-all"]
    }
};
    html2pdf().set(option).from(resume).save();

}