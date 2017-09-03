


window.onload = function(){

var correct = 0;
var incorrect;
var unanswered;

	$("#time").html("<br>")
	$("#question").html("<br>");
	//$(".progressBarClass").html("")
	$("#a").html("<br>")
	$("#b").html("<button>Start</button>")
	$("#c").html("")
	$("#d").html("")

	var questions = {
		question1:{
			question:"What NFL team does Marshawn Lynch play for?",
			optionA:"Los Angeles Lakers",
			optionB:"Seattle Seahawks",
			optionC:"Atlanta Falcons",
			optionD:"Oakland Raiders"
		}, 
		question2:{
			question:"How many championships did Michael Jordan win?",
			optionA:"Two",
			optionB:"Three",
			optionC:"Four",
			optionD:"Five"

		} ,
		question3:{
			question:"Which city were the Olypmics of 1968 played in?",
			optionA:"Rio de Janeiro",
			optionB:"Mexico City",
			optionC:"Berlin",
			optionD:"Athens"	
		},
		question4:{
			question:"Which country won the first World Cup?",
			optionA:"Uruguay",
			optionB:"Brazil",
			optionC:"Italy",
			optionD:"Argentina"	
		}, 
		question5:{
			question:"Which NFL team has won the most Superbowls?",
			optionA:"New England Patriots",
			optionB:"Pittsburgh Steelers",
			optionC:"Green Bay Packers",
			optionD:"Dallas Cowyboys"	
		}, 
	}

	$("#b").on("click", function() {

		$(".progressBarClass").html("<progress value='15' max='15' id='progressBar'></progress>");
		
		var timeLeft = 15;
		var downloadTimer = setInterval(function(){
			$("#progressBar").val(timeLeft--);
			if(timeLeft === 0){
				console.log("Time");
				timeLeft = 0;
			}
		},1000);

		$("#question").html(questions.question1.question);
		$("#a").html("<button>A) " + questions.question1.optionA + "</button")
		$("#b").html("<button>B) " + questions.question1.optionB + "</button")
		$("#c").html("<button>C) " + questions.question1.optionC + "</button")
		$("#d").html("<button>D) " + questions.question1.optionD + "</button")



	//Correct Question 1
	$("#d").on("click", function(){
		console.log("Correct!");
		$("#question").html("Time left: " + timeLeft + " seconds");
		$("#a").html("Correct");
		$("#b").html("Some image");
		clearInterval(downloadTimer);
		$("#c, #d").html(" ")
		correct++;

		
	})

	$("#a, #b, #c").on("click", function(){
		console.log("Incorrect!")
		$("#question").html("Time left: " + timeLeft + " seconds");
		$("#a").html("Incorrect");
		$("#b").html("The Correct Answer Is: " + questions.question1.optionD);
		$("#c").html("Some image");
		$("#d").html(" ")
		clearInterval(downloadTimer);
		


	})

	$("#a, #b, #c, #d").on("click", function(){

		setTimeout(pause, 1000 * 3)
		
		function pause(){
			
			console.log("Second Question")
			
			$(".progressBarClass").html("<progress value='15' max='15' id='progressBar'></progress>");
			
			var timeLeft = 15;
			var downloadTimer = setInterval(function(){
				$("#progressBar").val(timeLeft--);
				if(timeLeft === 0){
					console.log("Time");
					timeLeft = 0;
				}
			},1000);

			$("#question").html(questions.question2.question);
			$("#a").html("<button>A) " + questions.question2.optionA + "</button")
			$("#b").html("<button>B) " + questions.question2.optionB + "</button")
			$("#c").html("<button>C) " + questions.question2.optionC + "</button")
			$("#d").html("<button>D) " + questions.question2.optionD + "</button")

			$("#d").on("click", function(){
				console.log("Correct!");
				$("#question").html("Time left: " + timeLeft + " seconds");
				$("#a").html("Correct");
				$("#b").html("Some image");
				clearInterval(downloadTimer);
				$("#c, #d").html(" ")
				correct++;


			})

			$("#a, #b, #c").on("click", function(){
				console.log("Incorrect!")
				$("#question").html("Time left: " + timeLeft + " seconds");
				$("#a").html("Incorrect");
				$("#b").html("The Correct Answer Is: " + questions.question2.optionD);
				$("#c").html("Some image");
				$("#d").html(" ")
				clearInterval(downloadTimer);
			})
			
			$("#a, #b, #c, #d").on("click", function(){

				setTimeout(pause, 1000 * 3)

				function pause(){

					console.log("Third Question")

					$(".progressBarClass").html("<progress value='15' max='15' id='progressBar'></progress>");

					var timeLeft = 15;
					var downloadTimer = setInterval(function(){
						$("#progressBar").val(timeLeft--);
						if(timeLeft === 0){
							console.log("Time");
							timeLeft = 0;
						}
					},1000);

					$("#question").html(questions.question3.question);
					$("#a").html("<button>A) " + questions.question3.optionA + "</button")
					$("#b").html("<button>B) " + questions.question3.optionB + "</button")
					$("#c").html("<button>C) " + questions.question3.optionC + "</button")
					$("#d").html("<button>D) " + questions.question3.optionD + "</button")

					$("#b").on("click", function(){
						console.log("Correct!");
						$("#question").html("Time left: " + timeLeft + " seconds");
						$("#a").html("Correct");
						$("#b").html("Some image");
						clearInterval(downloadTimer);
						$("#c, #d").html(" ")
						correct++;


					})

					$("#a, #c, #d").on("click", function(){
						console.log("Incorrect!")
						$("#question").html("Time left: " + timeLeft + " seconds");
						$("#a").html("Incorrect");
						$("#b").html("The Correct Answer Is: " + questions.question3.optionB);
						$("#c").html("Some image");
						$("#d").html(" ")
						clearInterval(downloadTimer);
					})

					$("#a, #b, #c, #d").on("click", function(){

						setTimeout(pause, 1000 * 3)

						function pause(){

							console.log("Third Question")

							$(".progressBarClass").html("<progress value='15' max='15' id='progressBar'></progress>");

							var timeLeft = 15;
							var downloadTimer = setInterval(function(){
								$("#progressBar").val(timeLeft--);
								if(timeLeft === 0){
									console.log("Time");
									timeLeft = 0;
								}
							},1000);

							$("#question").html(questions.question4.question);
							$("#a").html("<button>A) " + questions.question4.optionA + "</button")
							$("#b").html("<button>B) " + questions.question4.optionB + "</button")
							$("#c").html("<button>C) " + questions.question4.optionC + "</button")
							$("#d").html("<button>D) " + questions.question4.optionD + "</button")

							$("#a").on("click", function(){
								console.log("Correct!");
								$("#question").html("Time left: " + timeLeft + " seconds");
								$("#a").html("Correct");
								$("#b").html("Some image");
								clearInterval(downloadTimer);
								$("#c, #d").html(" ");
								correct++;


							})

							$("#b, #c, #d").on("click", function(){
								console.log("Incorrect!")
								$("#question").html("Time left: " + timeLeft + " seconds");
								$("#a").html("Incorrect");
								$("#b").html("The Correct Answer Is: " + questions.question4.optionA);
								$("#c").html("Some image");
								$("#d").html(" ")
								clearInterval(downloadTimer);
							})



						}

					} )

					$("#a, #b, #c, #d").on("click", function(){

						setTimeout(pause, 1000 * 3)

						function pause(){

							console.log("Fifth Question")

							$(".progressBarClass").html("<progress value='15' max='15' id='progressBar'></progress>");

							var timeLeft = 15;
							var downloadTimer = setInterval(function(){
								$("#progressBar").val(timeLeft--);
								if(timeLeft === 0){
									console.log("Time");
									timeLeft = 0;
								}
							},1000);

							$("#question").html(questions.question5.question);
							$("#a").html("<button>A) " + questions.question5.optionA + "</button")
							$("#b").html("<button>B) " + questions.question5.optionB + "</button")
							$("#c").html("<button>C) " + questions.question5.optionC + "</button")
							$("#d").html("<button>D) " + questions.question5.optionD + "</button")

							$("#b").on("click", function(){
								console.log("Correct!");
								$("#question").html("Time left: " + timeLeft + " seconds");
								$("#a").html("Correct");
								$("#b").html("Some image");
								clearInterval(downloadTimer);
								$("#c, #d").html(" ");
								correct++;
								console.log(correct);


							})

							$("#a, #c, #d").on("click", function(){
								console.log("Incorrect!")
								$("#question").html("Time left: " + timeLeft + " seconds");
								$("#a").html("Incorrect");
								$("#b").html("The Correct Answer Is: " + questions.question5.optionB);
								$("#c").html("Some image");
								$("#d").html(" ")
								clearInterval(downloadTimer);
							})



						}

					} )
				}

			} )
}

} )

setTimeout(function(){ 
	if(timeLeft === 0){
		clearInterval(downloadTimer);
		console.log("Second")
		setTimeout(pause, 1000 * 3)
		function pause(){

			console.log("Second Question")
			var timeLeft = 15;
			var downloadTimer = setInterval(function(){
				$("#progressBar").val(timeLeft--);
				if(timeLeft === 0){
					console.log("Time");
					timeLeft = 0;
				}
			},1000);

			$("#question").html(questions.question2.question);
			$("#a").html("<button>A) " + questions.question2.optionA + "</button")
			$("#b").html("<button>B) " + questions.question2.optionB + "</button")
			$("#c").html("<button>C) " + questions.question2.optionC + "</button")
			$("#d").html("<button>D) " + questions.question2.optionD + "</button")

			$("#d").on("click", function(){
				console.log("Correct!");
				$("#question").html("Time left: " + timeLeft + " seconds");
				$("#a").html("Correct");
				$("#b").html("Some image");
				clearInterval(downloadTimer);
				$("#c, #d").html(" ");
				correct++;


			})

			$("#a, #b, #c").on("click", function(){
				console.log("Incorrect!")
				$("#question").html("Time left: " + timeLeft + " seconds");
				$("#a").html("Incorrect");
				$("#b").html("The Correct Answer Is: " + questions.question1.optionD);
				$("#c").html("Some image");
				$("#d").html(" ")
				clearInterval(downloadTimer);

			})


			$("#a, #b, #c, #d").on("click", function(){

				setTimeout(pause, 1000 * 3)

				function pause(){

					console.log("Third Question")

					$(".progressBarClass").html("<progress value='15' max='15' id='progressBar'></progress>");

					var timeLeft = 15;
					var downloadTimer = setInterval(function(){
						$("#progressBar").val(timeLeft--);
						if(timeLeft === 0){
							console.log("Time");
							timeLeft = 0;
						}
					},1000);

					$("#question").html(questions.question3.question);
					$("#a").html("<button>A) " + questions.question3.optionA + "</button")
					$("#b").html("<button>B) " + questions.question3.optionB + "</button")
					$("#c").html("<button>C) " + questions.question3.optionC + "</button")
					$("#d").html("<button>D) " + questions.question3.optionD + "</button")

					$("#b").on("click", function(){
						console.log("Correct!");
						$("#question").html("Time left: " + timeLeft + " seconds");
						$("#a").html("Correct");
						$("#b").html("Some image");
						clearInterval(downloadTimer);
						$("#c, #d").html(" ");
						correct++;


					})

					$("#a, #c, #d").on("click", function(){
						console.log("Incorrect!")
						$("#question").html("Time left: " + timeLeft + " seconds");
						$("#a").html("Incorrect");
						$("#b").html("The Correct Answer Is: " + questions.question3.optionB);
						$("#c").html("Some image");
						$("#d").html(" ")
						clearInterval(downloadTimer);
					})

				}

			} )
		}

	}; }, 15000);

})

}

// The link has been clicked. } else { // The link has not been clicked. }

//So I cant get this to work, I'm assuming because it runs when the page loads while factor is still false and it doesn't run again.
//If I didnt do it this way then I would have to start the second question from each of the choices above and so forth














		//Start Question 2 
		/*function pause (){
			if(factor === true){

				var timeLeft = 30;
				var downloadTimer = setInterval(function(){
					$("#progressBar").val(timeLeft--);
					if(timeLeft === 0)
						clearInterval(downloadTimer);
				},1000);

				$("#question").html(questions.question2.question);
				$("#a").html("<button>A) " + questions.question2.optionA + "</button")
				$("#b").html("<button>B) " + questions.question2.optionB + "</button")
				$("#c").html("<button>C) " + questions.question2.optionC + "</button")
				$("#d").html("<button>D) " + questions.question2.optionD + "</button")

				//Correct Question 2
				$("#d").on("click", function(){
					console.log("Correct!");
					$("#question").html("Time left: " + timeLeft + " seconds");
					$("#a").html("Correct");
					$("#b").html("Some image");
					clearInterval(downloadTimer);
					$("#c, #d").html(" ")
					factor = false;
					setTimeout(pause, 1000 * 3);

					//Start Question 3
					function pause (){
						if(factor === false){

							var timeLeft = 30;
							var downloadTimer = setInterval(function(){
								$("#progressBar").val(timeLeft--);
								if(timeLeft === 0)
									clearInterval(downloadTimer);
							},1000);

							$("#question").html(questions.question2.question);
							$("#a").html("<button>A) " + questions.question2.optionA + "</button")
							$("#b").html("<button>B) " + questions.question2.optionB + "</button")
							$("#c").html("<button>C) " + questions.question2.optionC + "</button")
							$("#d").html("<button>D) " + questions.question2.optionD + "</button")

							$("#d").on("click", function(){
								console.log("Correct!");
								$("#question").html("Time left: " + timeLeft + " seconds");
								$("#a").html("Correct");
								$("#b").html("Some image");
								clearInterval(downloadTimer);
								$("#c, #d").html(" ")
								factor = false;



							})
						}

					}



				})
			}

		}


	})
	

	$("#a, #b, #c").on("click", function(){
		console.log("Incorrect!")
		$("#question").html("Time left: " + timeLeft + " seconds");
		$("#a").html("Incorrect");
		$("#b").html("The Correct Answer Is: " + questions.question1.optionD);
		$("#c").html("Some image");
		$("#d").html(" ")
		clearInterval(downloadTimer);
		factor = true;
		
		setTimeout(pause, 1000 * 3);
		
		function pause (){
			if(factor === true){

				var timeLeft = 30;
				var downloadTimer = setInterval(function(){
					$("#progressBar").val(timeLeft--);
					if(timeLeft === 0)
						clearInterval(downloadTimer);
				},1000);

				$("#question").html(questions.question2.question);
				$("#a").html("<button>A) " + questions.question2.optionA + "</button")
				$("#b").html("<button>B) " + questions.question2.optionB + "</button")
				$("#c").html("<button>C) " + questions.question2.optionC + "</button")
				$("#d").html("<button>D) " + questions.question2.optionD + "</button")
				$("#d").on("click", function(){
					console.log("Correct!");
					$("#question").html("Time left: " + timeLeft + " seconds");
					$("#a").html("Correct");
					$("#b").html("Some image");
					clearInterval(downloadTimer);
					$("#c, #d").html(" ")
					factor = false;
					


				})
			}

		}

	})
	


})

};

//$("#a").html("The correct answer is: " + questions.question1.optionD);
/*var timeLeft;
var start;

function timer() {
    timeLeft = setInterval(timeStart, 1000 *30);
    start = 30;
}

function timeStart() {
    alert("Hello!");
}



setTimeout(remaining, 1000 * 30);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

//  Step 3:
//  Fill in the blanks to these functions.
function fiveSeconds() {

  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}
*/



