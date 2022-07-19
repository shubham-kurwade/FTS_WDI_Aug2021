// Globals
let isPlaying
let time = 60
let score = 0
let currentWord
let firstPress = 0

// DOM Elements
const inputForm = document.getElementById('inputForm')
const targetWord = document.getElementById('targetWord')
const wordInput = document.getElementById('wordInput')
const counterOutput = document.getElementById('counterOutput')
const scoreOutput= document.getElementById('scoreOutput')
const highscore = document.getElementById('highscore')
const msg = document.getElementById('msg')
const startAud = document.getElementById('startAud')
const endAud = document.getElementById('endAud')
const beanImg = document.getElementById('bean')

window.addEventListener('load', loadWord(words))
window.onkeypress = (e)=>{if(e.keyCode === 13){start()}}
wordInput.addEventListener('keydown', match)

function start() {
    if(firstPress === 0 && document.activeElement === wordInput){
        startAud.play()
        beanImg.src= "media/impressed.png"
        msg.innerHTML = ""
        wordInput.value = ""
        isPlaying = true
        countDown()
        firstPress++
    }
}

function match() {
    currentWordLowerCase = currentWord.toLowerCase()
    wordInputLowerCase = wordInput.value.toLowerCase()
    if(wordInputLowerCase === currentWordLowerCase  && isPlaying){
        loadWord(words)
        score++
        scoreOutput.innerHTML = score
        wordInput.value = null
    }
}

function countDown() {
    console.log('Countdown Started...')
    let interval = setInterval(function() {
        if(time > 0 && isPlaying){
            time--
            counterOutput.innerHTML = time
        }else {
            endAud.play()
            clearInterval(interval)
            msg.innerHTML = 'Game Over! </br>Press Enter to Start Again'
            reset()
        }
    },1000)
}

inputForm.onsubmit = function(e) {
    e.preventDefault()
}

function loadWord(words) {
    Math.floor()
    randomIndex = Math.floor(Math.random() * words.length)
    currentWord = words[randomIndex]
    targetWord.innerHTML = currentWord
}

function reset() {
    console.log('Game Reset...')
    isPlaying = false
    scoreOutput.innerHTML = score
    firstPress = 0
    time = 60
    wordInput.blur()
    wordInput.value = ""
    if(score > highscore.innerHTML){
        beanImg.src = 'media/thumbs-up.png'
        highscore.innerHTML = score
        score = 0
    }else{
        beanImg.src = 'media/sad.png'
        score = 0
    }
}

// /// Difficulty JS 
// const difficulty ={
//     easy:6,
//     medium:5,
//     hard:4,
//     expert:2
// }

// let currentLevel =  difficulty.easy

//         document.getElementById("easy").addEventListener('click',function(){
//             currentLevel = difficulty.easy
//         })

//         document.getElementById("medium").addEventListener('click',function(){
//             currentLevel = difficulty.medium
//         })

//         document.getElementById("hard").addEventListener('click',function(){
//             currentLevel = difficulty.hard
//         })

//         document.getElementById("expert").addEventListener('click',function(){
//             currentLevel = difficulty.expert
//         })