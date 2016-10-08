/* Menu Functionality
–––––––––––––––––––––––––––––––––––––––––––––––––– */

//Trigger mavigation when menu is clicked
$(".menu").click(function(){
  $(".main-nav").toggle("slow");
  event.preventDefault();
});