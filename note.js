// // create two functions, add3Points(), and remove1Point()
// // add/remove points to/from the myPoints variable
// let myPoints = 3

// function add3Points() {
//     myPoints +=  3
    
// }

// function remove1Point() {
//     myPoints -=  1
    
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// // Call the functions so that the line below logs out 10


//When the user clicks the purchse button, render out
//"Something went wrong, please try again"
// that has the id="error"

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase () {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation useing num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// e.g if the user clicks on the "plus", you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// let num1 = 8
// let num2 = 2
// document.getElementId("num1-el").textContent = num1
// document.getElementId("num2-el").textContent = num2

// let sumEl = document.getElementId("sum-el")

// function add(){
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }

// function subtract(){
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }

// function divide(){
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }

// function multiply(){
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }


// let age = 22
// if (age < 21) {
//     console.log("You can not enter the club! ")
// } else {
//     console.log("Welcome!")
// }

// let age = 100

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten a card from the King!")
// }

// console.log(4 === 3)  
// console.log(12 > 12)
// console.log(3 < 0)
// console.log(3 >= 3)
// console.log(11 <= 11)
// console.log(3 <= 2)

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

//  console.log(featuredPosts.length)


// let heather = ["Heather", 39, true]

// let cards = [7, 4]

// cards.push(6)
// console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)

// LOOPS LOOPS LOOPS LOOPS
// Count to ten!
// We need to specify

// WHere should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//          START        FINISH        STEP SIZE
// for ( let count = 1; count < 11;  count += 1) {

//     console.log(count)
// }


// Create a loop that starts at zero and counts to 5, in steps of one

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }


// Create a loop that counts from 10 to 100 in steps of 10
// use console.log to log out the numbers

// for ( let i = 10; i < 101; i += 10) {
//     console.log(i)
// }


// let cards = [7, 3, 9]
// Create a for loop that logs out all the cards in the array
// use cards.length to specify how long the loop should run

// for (i = 0; i < cards.length; i++ ) {
//     console.log(cards[i])
// }


//render the sentence in the greetingEl paragraph using a for loop and .textContent

// let sentence =  ["Hello ","my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (i = 0; i < sentence.length; i++ ) {
//     greetingEl.textContent = sentence[i]
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if(player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// write a function that returns the total race time
// call/invoke the function and store the returned value in a new variable
// finally, log the variable out

// let player1Time = 102
// let player2Time = 107


// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = totalRaceTime()
// console.log(totalTime)

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)


// let randomNumber = Math.floor( Math.random() * 6) + 1
// console.log(randomNumber)

// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     return randomNumber
// }

// console.log(rollDice())