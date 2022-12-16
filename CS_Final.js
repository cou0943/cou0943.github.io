alert("You are home alone one night and super bored you can go out to a friend's house, but do you really want to? Press 1: Go to friend's house Press 2: stay home.");

// Button Elements
let ChoiceOneBtn = document.getElementById("choice-1")
let ChoiceTwoBtn = document.getElementById("choice-2")
let ChoiceThreeBtn = document.getElementById("choice-3")
let ChoiceFourBtn = document.getElementById("choice-4")
let ChoiceFiveBtn = document.getElementById("choice-5")
let ChoiceSixBtn = document.getElementById("choice-6")


ChoiceOneBtn.onclick = function(){
    alert("You get to your friend's house, will you knock on the door or ring the doorbell? Press 3:Ring The Doorbell, Press 4: Knock.")
}

ChoiceTwoBtn.onclick = function(){
    alert("Yeah you're really tired, you should rest, but what are you gonna do? Press 5: watch TV Press 6: play video games")
}

ChoiceThreeBtn.onclick = function(){
    alert("Someone comes to the door and lets you in, you have a great night with your friends and go home afterwards and get a great night of sleep. End.")
}

ChoiceFourBtn.onclick = function(){
    alert("Nobody hears you knock over the loud music inside, you get nervous and go home and sleep. End")
}

ChoiceFiveBtn.onclick = function(){
    alert(" you fall asleep on the couch after watching several episodes of your favorite show, what a good night at home. End.")
}

ChoiceSixBtn.onclick = function(){
    alert("You play video games for hours, then look at the clock and it's... 7AM! where did the time go? you trudge through your day and go to bed early. End ")
}