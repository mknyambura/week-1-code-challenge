// Let's create a funtion that will categorize the grades based on the subjects' respetive grade and give an output of the grade the student will receive

function Calculate(){
    let m = document.getElementById('m').value;
    let e = document.getElementById('e').value;
    let k = document.getElementById('k').value;
    let f = document.getElementById('f').value;
    let c = document.getElementById('c').value;

    const total = parseFloat(m) + parseFloat(e) + parseFloat(k) + parseFloat(f) + parseFloat(c);
    document.getElementById("calc").innerHTML = `Your Total Marks is ${total}/500`;

    const percentage = (total/500)*100;
    document.getElementById("percent").innerHTML = `Your Percentage Average is ${percentage}%`;

    // If statement to categorize the result after calculating it
    if (percentage > 79){
        document.getElementById("grade").innerHTML = `Your Grade is A`;
    }else if (percentage > 60 && percentage < 79){
        document.getElementById("grade").innerHTML = `Your Grade is B`;
    }else if (percentage > 49 && percentage < 59){
        document.getElementById("grade").innerHTML = `Your Grade is C`;
    }else if(percentage > 40 && percentage < 49){
        document.getElementById("grade").innerHTML = `Your Grade is D`;
    }else{
        document.getElementById("grade").innerHTML = `Your Grade is E`;
    }
}