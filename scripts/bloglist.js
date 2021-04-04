/*
 Made By
 Id = 1811981352
 Name = Vishwas Sharma
 For any queries contact me on linkdin = https://www.linkedin.com/in/vishwas-sharma-a54236203/
 */

var configuration_model=document.getElementsByClassName("Confirmation_box_model")[0];

var configuration_btn=document.querySelectorAll(".vis_Trash");

var configuration_no=document.getElementById("no");



var j;
for (j = 0; j < configuration_btn.length; j++) {
    let btn=configuration_btn[j];
    btn.onclick=function() {
        configuration_model.style.display="flex";
    }
}

configuration_no.onclick=function () {
    configuration_model.style.display="none";
}

/*
 Made By
 Id = 1811981352
 Name = Vishwas Sharma
 For any queries contact me on linkdin = https://www.linkedin.com/in/vishwas-sharma-a54236203/
 :)
 */