function checkspeed() {
    const speed = document.getElementById('s').value;
    document.getElementById('s').innerHTML = `Your speed is ${speed}`
    
    const points = (speed - 70) / 5;
    document.getElementById('calc').innerHTML = `Your Points: ${points}`
    
    if (speed <= 70){
        // window.alert('Ok')
        document.getElementById('calc').innerHTML = `Ok`
    }else if (speed > 70 && points >= 12){
        document.getElementById('credit').innerHTML = `License suspended`;
    }
       
    
}
