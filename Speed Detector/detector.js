function checkSpeed(speed) {
    let speedLimit = 70;
    let demeritPoints = 0;

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

let speed = 20;
checkSpeed(speed);
