        function percentage(){
            var cgpa = document.getElementById("cgpa").value;
            var tot = document.getElementById("ctot").value;
            document.getElementById("cpercent").value = (cgpa/tot)*100
        }

        function higher_sec(){
            var mark = document.getElementById("mark").value;
            var total = document.getElementById("tot").value;
            ans = (mark/total)*100
            document.getElementById("percent").value = ans.toFixed(2);
        }

        function s2percent(){
            var mark = document.getElementById("smark").value;
            var total = document.getElementById("stot").value;
            ans = (mark/total)*100
            document.getElementById("spercent").value = ans.toFixed(2);
        }

         const myForm = document.querySelector('.myform'); 
    myForm.addEventListener('submit', function(event) {  
        event.preventDefault();
        window.location.href = "skill.html";
    });

        function back(){
        window.location.href = "personal_details.html"
        }

        const college = document.querySelector(".clg");
        const twelfth = document.querySelector(".schl1");
        const tenth = document.querySelector(".schl2");

        function opensec(section){

            // Forms mattum hide
            document.querySelector(".clg").style.display = "none";
            document.querySelector(".schl1").style.display = "none";
            document.querySelector(".schl2").style.display = "none";

            // Arrows reset
            document.getElementById("clgarrow").className = "fa-solid fa-chevron-right";
            document.getElementById("schl1arrow").className = "fa-solid fa-chevron-right";
            document.getElementById("schl2arrow").className = "fa-solid fa-chevron-right";

            if(section=="college"){
                document.querySelector(".clg").style.display = "block";
                document.getElementById("clgarrow").className = "fa-solid fa-chevron-down";
            }

            if(section=="school1"){
                document.querySelector(".schl1").style.display = "block";
                document.getElementById("schl1arrow").className = "fa-solid fa-chevron-down";
            }

            if(section=="school2"){
                document.querySelector(".schl2").style.display = "block";
                document.getElementById("schl2arrow").className = "fa-solid fa-chevron-down";
            }
        }
      function save_clg(){

                var degree = document.getElementById("degree").value;
                var clgname = document.getElementById("cname").value;
                var start = document.getElementById("csyear").value;
                var end = document.getElementById("clyear").value;
                var cgpa = document.getElementById("cgpa").value;
                var total = document.getElementById("ctot").value;
                var percentage = document.getElementById("cpercent").value;

                var education = JSON.parse(localStorage.getItem("collegeDetails")) || [];

                var newData = {
                    degree: degree,
                    college: clgname,
                    start: start,
                    end: end,
                    cgpa: cgpa,
                    total: total,
                    percentage: percentage
                };


            
                var index = education.findIndex(function(item){
                    return item.degree == degree;
                });

                if(index != -1){
                    education[index] = newData;
                }
                else{
                    education.push(newData);
                }


                localStorage.setItem("collegeDetails", JSON.stringify(education));

                alert("College details saved");

                opensec("school1");
            }

            function add(){

                opensec("college");

                document.getElementById("degree").value="";
                document.getElementById("cname").value="";
                document.getElementById("csyear").value="";
                document.getElementById("clyear").value="";
                document.getElementById("cgpa").value="";
                document.getElementById("ctot").value="";
                document.getElementById("cpercent").value="";

            }

        function save_12th(){

                var schname1 = document.getElementById("name").value;
                var schstart1 = document.getElementById("syear").value;
                var schend1 = document.getElementById("lyear").value;
                var schmark1 = document.getElementById("mark").value;
                var schtotal1 = document.getElementById("tot").value;
                var schpercentage1 = document.getElementById("percent").value;
                localStorage.setItem("name",schname1);
                localStorage.setItem("syear",schstart1);
                localStorage.setItem("lyear",schend1);
                localStorage.setItem("mark",schmark1);
                localStorage.setItem("tot",schtotal1);
                localStorage.setItem("percent",schpercentage1);
                opensec("school2");
        }

        function save_10th(){

                var schname = document.getElementById("sname").value;
                var schstart = document.getElementById("ssyear").value;
                var schend = document.getElementById("slyear").value;
                var schmark = document.getElementById("smark").value;
                var schtotal = document.getElementById("stot").value;
                var schpercentage = document.getElementById("spercent").value;
                localStorage.setItem("sname",schname);
                localStorage.setItem("ssyear",schstart);
                localStorage.setItem("slyear",schend);
                localStorage.setItem("smark",schmark);
                localStorage.setItem("stot",schtotal);
                localStorage.setItem("spercent",schpercentage);
                alert('Educational details saved scuucessfullly!');
        }
        function next(){
               window.location.href = "skill.html"
        }
