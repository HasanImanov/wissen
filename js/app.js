var avatar = document.getElementsByClassName("_avatar");

for (i = 0; i < avatar.length; i++) {
    avatar[i].style.height = avatar[i].clientWidth + "px";
}
var roomHead = document.getElementById("r_m_Menu");
var chat = document.getElementById("r_chat");
var mentor = document.getElementById("r_mentor");
var room = document.getElementById("r_add");
var txt = document.getElementById("add_text");
var lang = document.getElementById("lang_");
var main = document.getElementById("list");
room.addEventListener("click", function () {
    console.log(roomHead.clientWidth + " ; " + chat.clientWidth + ";" + mentor.clientWidth + ";" + room.clientWidth + ";");
    var width = (roomHead.clientWidth - (chat.clientWidth + mentor.clientWidth + room.clientWidth)) / 2;
    if (txt.classList.contains("back")) {
        chat.style.opacity=1;
        mentor.style.opacity=1;
        lang.style.opacity=0;
        lang.style.visibility="hidden";
        roomHead.style.left = 0 + "px";
        txt.innerText = "+";
        txt.classList.remove("back");

    }
    else {
        lang.style.opacity=1;
        lang.style.visibility="visible";
        roomHead.style.left = -1 * (chat.clientWidth + mentor.clientWidth + 50) + "px";
        txt.innerText = "<";
        txt.classList.add("back");
        chat.style.opacity=0;
        mentor.style.opacity=0;
    }
})



$("#r_add").click(function(){
    $("#list").fadeToggle(400)
})

