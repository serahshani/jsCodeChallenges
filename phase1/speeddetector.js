//function definition
function checkSpeed(speed) {
//indicates the speedlimit and demerit points
    let speedLimit = 70;
    let demeritPoints = 0;
//checking conditions
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
    }

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}
//assigning speed
let speed = 20;
//calling the function
checkSpeed(speed);