// jQuery dependency
$("input[data-type='currency']").on({
    keyup: function(){
        formatCurrency($(this));
    },
    blur: function(){
        formatCurrency($(this),"blur");
    }
});

function formatNumber(n){
    // format number 123456789 to 123,456,789
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur){
    // appends $ to value, validates decimal side and puts cursor back in the right position
    
    // get input value
    var inputValue = input.val();
    // don't validate empty input
    if (inputValue === ""){
        return;
    }
    // original length
    var originalLength = inputValue.length;
    // intial caret position
    var caretPosition = input.prop("selectionStart");
    // check for decimal
    if(inputValue.indexOf(".") >= 0){
        // Gets position of first decimal. This prevents multiple decimals from being entered
        var decimalPosition = inputValue.indexOf(".");
        // Splits number by decimal point
        var leftSide = inputValue.substring(0, decimalPosition);
        var rightSide = inputValue.substring(decimalPosition);
        // Adds commas to the left side of the number
        leftSide = formatNumber(leftSide);
        // Validates right side
        rightSide = formatNumber(rightSide);
        // On blur makes sure 2 numbers after decimal
        if (blur === "blur"){
            rightSide += "00";
        }
        // Limits decimal to only 2 digits 
        rightSide = rightSide.substring(0, 2);
        // Joins number by . 
        inputValue = leftSide + "." + rightSide;
    }else {
        // If no decimal entered, it adds commas to the number and removes all non-digits 
        inputValue = formatNumber(inputValue);
        inputValue = inputValue;
        // Final formatting 
        if (blur === "blur"){
            inputValue += ".00";
        }
    }
    // Sends updated string to input 
    input.val(inputValue);
    // Puts caret back in the right position 
    var updatedLength = inputValue.length;
    caretPosition = updatedLength - originalLength + caretPosition;
    input[0].setSelectionRange(caretPosition, caretPosition)
}

function netSalary(){
    // const nssf;
    // const insurance;
    // const tax;
    // const relief;
    // const paye;
    const salary = document.getElementById('salary-month').value;
    const calculate = document.getElementById('button');
    const output1 = document.getElementById('basicPay');
    output1.innerHTML = `Basic Pay: ${salary}`
    

}
// calculate.addEventListener('click', netSalary);