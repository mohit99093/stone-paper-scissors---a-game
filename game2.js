let computerscore = 0;
let userscore = 0;
const userscore_span = document.getElementById("user");
const computerscore_span = document.getElementById("computer");
const score_div = document.querySelector(".square")
const result_div = document.getElementById("re");
const rock_img = document.getElementById("rock");
const paper_img = document.getElementById("paper");
const seccior_img = document.getElementById("seccior");

function main()
{
	rock_img.addEventListener('click' , function(){
		game("rock");
	})

	paper_img.addEventListener('click',  function(){
		game("paper");
	})

	seccior_img.addEventListener('click', function(){
		game("seccior");
	})
}
main();

function comchoice(){
	const array = ['rock','paper','seccior' ];
	return array[Math.floor(Math.random()*3)]
}
function win(userchoice,computerchoice)
{	userscore++;
	userscore_span.innerHTML = userscore;	
	result_div.innerHTML = userchoice + " beats " + computerchoice + ". YOU win.";
	document.getElementById(userchoice).classList.add('green');
	setTimeout(function(){ document.getElementById(userchoice).classList.remove('green');},500)
}
function lose(userchoice,computerchoice)
{
	computerscore++;
	computerscore_span.innerHTML = computerscore;
	result_div.innerHTML = userchoice + " lost to " + computerchoice + ". YOU LOSE.";
	document.getElementById(userchoice).classList.add('red');
	setTimeout(function(){ document.getElementById(userchoice).classList.remove('red');},500)
}
function draw(userchoice,computerchoice)
{
	result_div.innerHTML = " Ooops!!! That is Draw."
	document.getElementById(userchoice).classList.add('gray');
	setTimeout(function(){ document.getElementById(userchoice).classList.remove('gray');},500)
}

function game(userchoice)
{
	let computerchoice = comchoice();
	 switch(userchoice + computerchoice)
	 {
	 	case "rockseccior":
	 	case "paperrock":
	 	case "secciorpaper":
	 
	 		win(userchoice,computerchoice);
	 		break;
	 	case "rockpaper":
	 	case "paperseccior":
	 	case "secciorrock":
	 
	 		lose(userchoice,computerchoice);
	 		break;
	 	case "rockrock":
	 	case "paperpaper":
	 	case "secciorseccior":
	
	 		draw(userchoice,computerchoice);
	 		break;
	 }
}