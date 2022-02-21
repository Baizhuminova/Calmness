              // Java script

document.getElementById("button-form").onclick = Organization;

function Organization() {
	let name = document.getElementById("YourName").value;
	let mail = document.getElementById("YourMail").value;
  let select = document.getElementById("YourSelect").value;

   if (name == 0 || mail == 0) {

  alert("Please fill in the all fields!");
   }

   else {
    let nameCount = name.length;
    let upperCase = name.slice(0,1);
    let lowerCase = name.slice(1,nameCount);

	alert (upperCase.toUpperCase() + lowerCase.toLowerCase() + ", you have successfully sent your data. " + "The " + select + " will contact you soon."  );
} }


            // Button Jquery and JS

$(document).ready(function(){
  $("#button-jq").click(function(){
    $(".form").slideToggle("slow");
  });
});

document.getElementById("button-jq").onclick = play;
function play() {
   var audio = new Audio('audio/multyashnyy-zvuk-nazhatiya-na-knopku.mp3');
audio.play();
}

           // Mouseenter

  $(document).mouseover(function(){
  $("#button-jq").on({
  click: function(){
  $(this).css("background-color", "#F5DAEF");
          }
			});
  });
