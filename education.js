function percentage(){

    var cgpa = document.getElementById("cgpa").value;
    var tot = document.getElementById("ctot").value;

    if(cgpa && tot && tot > 0){

        var result = (cgpa / tot) * 100;
        document.getElementById("cpercent").value = result.toFixed(2);

    }
    else{

        document.getElementById("cpercent").value = "";

    }
}
function higher_sec(){

    var mark = document.getElementById("mark").value;
    var total = document.getElementById("tot").value;

    if(mark && total && total > 0){

        var ans = (mark / total) * 100;
        document.getElementById("percent").value = ans.toFixed(2);

    }
    else{

        document.getElementById("percent").value = "";

    }
}
function s2percent(){

    var mark = document.getElementById("smark").value;
    var total = document.getElementById("stot").value;

    if(mark && total && total > 0){

        var ans = (mark / total) * 100;
        document.getElementById("spercent").value = ans.toFixed(2);

    }
    else{

        document.getElementById("spercent").value = "";

    }
}
function opensec(section){

    document.querySelector(".clg").style.display="none";
    document.querySelector(".schl1").style.display="none";
    document.querySelector(".schl2").style.display="none";


    document.getElementById("clgarrow").className =
    "fa-solid fa-chevron-right";

    document.getElementById("schl1arrow").className =
    "fa-solid fa-chevron-right";

    document.getElementById("schl2arrow").className =
    "fa-solid fa-chevron-right";

    if(section=="college"){
        document.querySelector(".clg").style.display="block";
        document.getElementById("clgarrow").className =
        "fa-solid fa-chevron-down";
    }

    if(section=="school1"){
        document.querySelector(".schl1").style.display="block";
        document.getElementById("schl1arrow").className =
        "fa-solid fa-chevron-down";
    }


    if(section=="school2"){
        document.querySelector(".schl2").style.display="block";
        document.getElementById("schl2arrow").className =
        "fa-solid fa-chevron-down";
    }

}

function save_clg(){
    let inputs = document.querySelectorAll(".clg input, .clg select");

    for(let input of inputs){
        if(!input.checkValidity()){
            input.reportValidity();
            return;
        }
    }

    let education = JSON.parse(localStorage.getItem("collegeDetails")) || [];

    let newData = {
        type: document.getElementById("qualType").value,
        degree: document.getElementById("degree").value,
        college: document.getElementById("cname").value,
        start: document.getElementById("csyear").value,
        end: document.getElementById("clyear").value,
        cgpa: document.getElementById("cgpa").value,
        total: document.getElementById("ctot").value,
        percentage: document.getElementById("cpercent").value
    };

    education.push(newData);
    localStorage.setItem("collegeDetails",JSON.stringify(education));
    alert("College details saved");
    clearCollege();
    opensec("school1");
}

function clearCollege(){
    document.getElementById("qualType").value="";
    document.getElementById("degree").value="";
    document.getElementById("cname").value="";
    document.getElementById("csyear").value="";
    document.getElementById("clyear").value="";
    document.getElementById("cgpa").value="";
    document.getElementById("ctot").value="";
    document.getElementById("cpercent").value="";
}

function save_12th(){
    let inputs = document.querySelectorAll(".schl1 input");

    for(let input of inputs){
        if(!input.checkValidity()){
            input.reportValidity();
            return;
        }
    }
    localStorage.setItem("name",document.getElementById("name").value);
    localStorage.setItem("syear",document.getElementById("syear").value);
    localStorage.setItem("lyear",document.getElementById("lyear").value);
    localStorage.setItem("mark",document.getElementById("mark").value);
    localStorage.setItem("tot",document.getElementById("tot").value);
    localStorage.setItem("percent",document.getElementById("percent").value);
    alert("12th details saved");
}

function save_10th(){

    let inputs = document.querySelectorAll(".schl2 input");
    for(let input of inputs){
        if(!input.checkValidity()){
            input.reportValidity();
            return;
        }
    }

    localStorage.setItem("sname",document.getElementById("sname").value);
    localStorage.setItem("ssyear",document.getElementById("ssyear").value);
    localStorage.setItem("slyear",document.getElementById("slyear").value);
    localStorage.setItem("smark",document.getElementById("smark").value);
    localStorage.setItem("stot",document.getElementById("stot").value);
    localStorage.setItem("spercent",document.getElementById("spercent").value);
    alert("10th details saved");

}

function back(){
    window.location.href="personal_details.html";
}

function next(){
    window.location.href="skill.html";
}