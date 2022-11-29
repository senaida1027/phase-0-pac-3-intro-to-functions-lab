function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}
let spy = string
logShout(spy)

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logShout(spy);

function sayHiToHeadphonedRoommate(string) {
    
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    }
    
    if(string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    string = "Let\'s have dinner together!";
    if(string === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}

sayHiToHeadphonedRoommate("hello");