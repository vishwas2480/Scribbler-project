/*
 Made By
 Id = 1811981352
 Name = Vishwas Sharma
 For any queries contact me on linkdin = https://www.linkedin.com/in/vishwas-sharma-a54236203/
 */



var creat_post_modal = document.getElementsByClassName("vis_post_model")[0];

var creat_post_btn=document.getElementById("create_post");

var creat_post_close_btn=document.getElementsByClassName("vis_post_close")[0];

creat_post_btn.onclick = function() {

    creat_post_modal.style.display = "flex";

}

creat_post_close_btn.onclick=function () {
    creat_post_modal.style.display="none";
}


window.onclick = function(event) {
    if (event.target === creat_post_modal) {
        creat_post_modal.style.display = "none";
    }
}

/*
 Made By
 Id = 1811981352
 Name = Vishwas Sharma
 For any queries contact me on linkdin = https://www.linkedin.com/in/vishwas-sharma-a54236203/
 */