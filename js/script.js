var menuButtonStatus = false;

function mainMenuButton(){
  var menuList = document.querySelectorAll(".module");
  if (menuButtonStatus === false) {
    for (let i = 0; i < menuList.length; i++) {
      menuList[i].style.display = "block";
    }
    menuButtonStatus = true;
  }
  else if (menuButtonStatus === true) {
    for (let i = 0; i < menuList.length; i++) {
      menuList[i].style.display = "none";
    }
    menuButtonStatus = false;
  }
}

var dropdown = document.getElementsByClassName("module-name");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}



var f = document.getElementById("angka").textContent;
console.log(f);
var x = pengurangan(f);
document.getElementById("hasil").innerHTML = x;
function pengurangan (a){
  return a-2;
}