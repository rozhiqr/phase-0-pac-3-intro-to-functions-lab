function shout(name){

    return name.toUpperCase()
}

console.log(shout("hello"));

function whisper(name){

    return name.toLowerCase()

}

console.log(whisper("HELLO"));

function logShout(name){

    console.log(name.toUpperCase());

}
function logWhisper(name){

    console.log(name.toLowerCase());

}


function sayHiToHeadphonedRoommate(name){

    if(name===name.toLowerCase()){
        return "I can\'t hear you!";
    }
    else if(name===name.toUpperCase()){
        return "YES INDEED!";
    }
    else if(name==="Let\'s have dinner together!"){
        return "I would love to!";
    }
}
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO!"));
console.log(sayHiToHeadphonedRoommate("Let\'s have dinner together!"));

