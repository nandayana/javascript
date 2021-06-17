/* document.getElementsByClassName("floating-menu").addEventListener("click", displayDate);
function displayDate() {
  console.log("klik");
} */

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