
$(document).ready(function() {


var btn1= document.getElementById("but1");
var btn2= document.getElementById("but2");

var btn3= document.getElementById("but3");

var s_info = document.getElementsByClassName("yazi_about");

var title = document.getElementsByClassName("title_t");


	
	btn1.addEventListener("click",function(){
		var ourRequest = new XMLHttpRequest();
		 	ourRequest.overrideMimeType("application/json");
			 
			ourRequest.open('GET','https://leventgumrukcu.herokuapp.com/about-api.php');

			ourRequest.onload=function(){
				var ourData=JSON.parse(ourRequest.responseText);
				console.log(ourData);
				$("#title_t").text(ourData[0].title);
				$("#yazi_about").html(ourData[0].text);
				console.log(ourData[0].title);
			
			};

		ourRequest.send();
	});

	btn2.addEventListener("click",function(){
		var ourRequest = new XMLHttpRequest();
		 	ourRequest.overrideMimeType("application/json");
			 
			ourRequest.open('GET','./about-api.php');

			ourRequest.onload=function(){
				var ourData=JSON.parse(ourRequest.responseText);
				console.log(ourData);
				$("#title_t").text(ourData[1].title);
				$("#yazi_about").html(ourData[1].text);
				console.log(ourData[1].title);
			
			};

		ourRequest.send();
	});

	btn3.addEventListener("click",function(){
		var ourRequest = new XMLHttpRequest();
		 	ourRequest.overrideMimeType("application/json");
			 
			ourRequest.open('GET','./about-api.php');

			ourRequest.onload=function(){
				var ourData=JSON.parse(ourRequest.responseText);
				console.log(ourData);
				$("#title_t").text(ourData[2].title);
				$("#yazi_about").html(ourData[2].text);
				console.log(ourData[2].title);
			
			};

		ourRequest.send();
	});
	
	
	
		
	
	}); // end ready