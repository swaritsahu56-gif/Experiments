let heading = document.querySelector("#mainheading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userinput");
 
let fontsize = 16;
 
document.getElementById("changetextbtn").addEventListener("click", function() {
   if(input.value !== "") {
    heading.textContent = input.value;
   }
});
document.getElementById("bgcolorbtn").onclick = function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
};
document.getElementById("fontsizebtn").addEventListener("click", function() {
    fontsize += 2;
    paragraph.style.fontSize = fontsize + "px";
});
document.getElementById("toggleparabtn").addEventListener("click", function() {
    if(paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

document.getElementById("resetbtn").addEventListener("click", function() {
    heading.innerHTML = "Welcome to JavaScript lab-";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#ffffff";
    input.value = "";
    fontsize = 16;
});