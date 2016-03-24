		
			function makered(){
				document.getElementById("mouseover") .style.color="red";
			}
		

			function keypress(){
				alert("Great you started typing");
			}
			document.getElementById("keydown").onkeydown=function() {keydonwn()};
			function keydonwn(){
				document.getElementById("keydonwn") .innerHTML.style.backgroundColor="green";
			}
			function transform(){
				var x = document.getElementById("fname");
				//function to convert user input to uppercase
				x.value  = x.value.toUpperCase();
			}
		

			function errorloading(){
				alert("the image could not be loaded");
			}
			function loaded() {
    		document.getElementById("cytonn").innerHTML = "the Cytonn Website has loaded successfully.";
			}
		

			function displaySelection(){
				var x = document.getElementById("selection").value;
				document.getElementById("myselection").innerHTML = "You have selected: " +x+ "as your deparment";
			}
			function success(){
				alert("The form was submitted");
			}
		

		function copied() {
		    document.getElementById("clipboard").innerHTML = "You copied text!"
		 }
		 function cutt() {
    		document.getElementById("clipboard").innerHTML = "You cut text!";
			}
		