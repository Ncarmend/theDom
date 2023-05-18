const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


// The user (me) will click on any of the 3 squares present, when they click on one square it will first create a copy of daid square and second it will print the color and the time elpased in the logs
const squares = document.querySelectorAll('.actionsquare')

console.log(squares)

const newSquaresContainer = document.querySelector('.displayedsquare-wrapper')

const logsContainer = document.querySelector('ul')


squares.forEach((square) => {
	console.log(square)
	square.addEventListener('click', (event) => {
		console.log(event.target.classList[1])
		newSquaresContainer.insertAdjacentHTML("afterbegin", event.target.outerHTML)


		let newSquare = document.querySelector('.displayedsquare-wrapper .actionsquare')

		newSquare.addEventListener('click', (event) => {
			alert(event.target.classList[1])
		})

		logsContainer.insertAdjacentHTML("beforeend", `<li>[${getElapsedTime()}] Created a new ${event.target.classList[1]} square</li>`)
	})
})


document.body.addEventListener('keyup', (event) => {
	console.log(event)
	if(event.key === " "){
		let randomColor = Math.floor(Math.random()*16777215).toString(16);
		console.log(randomColor)
		document.body.style.backgroundColor = "#" + randomColor
		logsContainer.insertAdjacentHTML("beforeend", `<li>[${getElapsedTime()}] Space Bar has been pressed color changed to #${randomColor}</li>`)
	}
	if(event.key === "l"){
		logsContainer.innerHTML = ""
	}
	if(event.key === "s"){
		newSquaresContainer.innerHTML = ""
	}	
})



// Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
// When the spacebar is hit randomly change the background color of the whole page
// Log when the spacebar is used the same way you used for the generated squares.
// When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
// When the s key is pressed the squares get deleted (erases the generated squares)
// Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square



