// Code your solution in this file!
function distanceFromHqInBlocks(home) {
    if (home >42) {
        return home - 42;
    } else {
        return 42 - home
    }
}
function distanceFromHqInFeet(home) {
        return distanceFromHqInBlocks(home) * 264
}
function distanceTravelledInFeet(home, destination) {
    if (destination > home) {
        return (destination - home) * 264;
    } else {
        return (home - destination) *264
    }
}
function calculatesFarePrice(home, destination) {
    const distance = distanceTravelledInFeet(home, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        const trip = distance - 400
        return trip * 0.02
    } else if (distance > 2000 && distance <= 2500 ) {
        return 25
    } else {
        return "cannot travel that far"
    }
    }


