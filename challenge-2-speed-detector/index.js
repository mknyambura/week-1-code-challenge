function checkSpeed() {
    const speed = document.getElementById('s').value;
    document.getElementById('s').innerHTML = `Your speed is ${speed}`
    
    const points = (speed - 70) / 5;
    document.getElementById('calc').innerHTML = `Your Points: ${points}`
    
    if (speed <= 70){
        // window.alert('Ok')
        document.getElementById('calc').innerHTML = `Ok`
        document.getElementById('credit').innerHTML = `You're good to go!`
    }else if (points >= 0.05 && points < 12){
        document.getElementById('credit').innerHTML = `Warning!`
    }else if (points >= 12){
        document.getElementById('credit').innerHTML = `License suspended`;
    }
}
