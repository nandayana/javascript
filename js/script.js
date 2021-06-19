/* var menuButtonStatus = false;

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
} */

dropDownMenu("floating-menu", 2);
dropDownMenu("list-menu",2);
dropDownMenu("module-name", 2);


function dropDownMenu(className, typeMenu) {

  var dropdown = document.getElementsByClassName(className);
  var i;

  if (typeMenu === 1) {
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      var dropdownContent  = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
  }
  else if (typeMenu === 2) {
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      var dropdownContent  = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
  }

}