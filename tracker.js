document.addEventListener("DOMContentLoaded", function () {

    const tracker = document.querySelector(".tracker");

    if (!tracker) return;

    const currentStep = Number(
        tracker.getAttribute("data-step")
    );

    const steps = document.querySelectorAll(".step");
    const lines = document.querySelectorAll(".line");

   const pagelinks ={1:"personal_details.html",
    2:"education_detail.html",
    3:"skill.html",
    4:"project.html",
    5:"experience.html"
   }

    steps.forEach(function (step) {

        const number = Number(
            step.getAttribute("data-number")
        );

        if (number < currentStep) {
            step.classList.add("completed");
            step.classList.add("clickable");
            step.addEventListener("click",function(){
                window.location.href = pagelinks[number];
            });
        }

        if (number === currentStep) {
            step.classList.add("active");
        }

    });




    lines.forEach(function (line, index) {

        if (index + 1 < currentStep) {
            line.classList.add("completed");
        }

    });


   

    const resumeType =
        sessionStorage.getItem("resumeType");

    if (resumeType === "fresher") {

        const experience =
            document.querySelector(".experience-step");

        if (experience) {
            experience.classList.add("skipped");
        }

    }

});