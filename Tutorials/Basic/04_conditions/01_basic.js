// 01_basic.js
// Shows basic conditioning in javascript
function canVote (number) {
    if (number >= 18) {
        console.log("You can vote")
    }
    else {
        console.log("You can not vote")
    }
}

canVote(17)