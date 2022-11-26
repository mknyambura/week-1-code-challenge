function checkspeed(speed) {
    points = 0;
    if (speed <= 70){
        console.log('Ok')
    }else if (speed > 70){
        points = (speed - 70) / 5;
        console.log(`Points = ${points}`)
        if (points >= 12){
            console.log(`License suspended`)
        }
    }
    
}
