function netSalary(){
    
    const salary = document.getElementById('salary-month').value;
    const calculate = document.getElementById('button');
    const nssf = salary * 0.06;
    const beforetax = salary - nssf;
    const taxableincome0 = 0.1;
    const taxableincome1 = 0.1;
    const taxableincome2 = 0.25;
    const taxableincome3 = 0.3;
    const personalRelief = 2400;
    const paye0 =  (taxableincome0 * beforetax) - 0;
    const paye1 =  (taxableincome1 * beforetax) - personalRelief;
    const paye2 =  (taxableincome2 * beforetax) - personalRelief;
    const paye3 =  (taxableincome3 * beforetax) - personalRelief;
    const nhif = 0;
    const  = 
    

    const outputBasicPay = document.getElementById('basicPay');
    const outputNSSF = document.getElementById('nssfPay');
    const outputBeforeTax = document.getElementById('beforeTax');
    const taxableIncome0 = document.getElementById('taxAmount');
    const taxableIncome1 = document.getElementById('taxAmount');
    const taxableIncome2 = document.getElementById('taxAmount');
    const taxableIncome3 = document.getElementById('taxAmount');
    const outputRelief = document.getElementById('personalRelief');
    const outputPaye0 = document.getElementById('payePay');
    const outputPaye1 = document.getElementById('payePay');
    const outputPaye2 = document.getElementById('payePay');
    const outputPaye3 = document.getElementById('payePay');
    const outputAfterTax0 = document.getElementById('afterTax');
    const outputAfterTax1 = document.getElementById('afterTax');
    const outputAfterTax2 = document.getElementById('afterTax');
    const outputAfterTax3 = document.getElementById('afterTax');
    const outputNHIF = document.getElementById('nhifPay');

    if (salary > 0 && salary && salary < 25589){
        outputRelief.innerHTML = `Personal Relief: 0`;
        taxableIncome0.innerHTML= `Income Tax: ${taxableincome0 * beforetax}`;
        outputPaye0.innerHTML = `P.A.Y.E: ${paye0}`;
        outputAfterTax0.innerHTML = `After Tax: ${beforetax - paye0}`;
    }else if (salary >= 25589 && salary <= 288000) {
        outputRelief.innerHTML = `Personal Relief: ${personalRelief}`;
        taxableIncome1.innerHTML= `Income Tax: ${taxableincome1 * beforetax}`;
        outputPaye1.innerHTML = `P.A.Y.E: ${paye1}`;
        outputAfterTax1.innerHTML = `After Tax: ${beforetax - paye1}`;
    }else if (salary > 288000 && salary <= 388000){
        outputRelief.innerHTML = `Personal Relief: ${personalRelief}`;
        taxableIncome2.innerHTML= `Income Tax: ${taxableincome2 * beforetax}`;
        outputPaye2.innerHTML = `P.A.Y.E: ${paye2}`;
        outputAfterTax2.innerHTML = `After Tax: ${beforetax - paye2}`;
    }else if (salary > 388000){
        outputRelief.innerHTML = `Personal Relief: ${personalRelief}`
        taxableIncome3.innerHTML= `Income Tax: ${taxableincome3 * beforetax}`;
        outputPaye3.innerHTML = `P.A.Y.E: ${paye3}`;
        outputAfterTax3.innerHTML = `After Tax: ${beforetax - paye3}`;
    }
    
    function nhifDeduction(input) {
        if (salary >= 0 && salary <= 5999) {
          outputNHIF.innerHTML = `NHIF 150`;
        } else if (salary >= 6000 && input <= 7999) {
            outputNHIF.innerHTML = `NHIF 300`;
        } else if (salary >= 8000 && input <= 11999) {
            outputNHIF.innerHTML = `NHIF 400`;
        } else if (salary >= 12000 && input <= 14999) {
            outputNHIF.innerHTML = `NHIF 500`;
        } else if (input >= 15000 && input <= 19999) {
          return 600;
        } else if (input >= 20000 && input <= 24999) {
          return 750;
        } else if (input >= 25000 && input <= 29999) {
          return 850;
        } else if (input >= 30000 && input <= 34999) {
          return 900;
        } else if (input >= 35000 && input <= 39999) {
          return 950;
        } else if (input >= 40000 && input <= 44999) {
          return 1000;
        } else if (input >= 45000 && input <= 49999) {
          return 1100;
        } else if (input >= 50000 && input <= 59999) {
          return 1200;
        } else if (input >= 60000 && input <= 69999) {
          return 1300;
        } else if (input >= 70000 && input <= 79999) {
          return 1400;
        } else if (input >= 80000 && input <= 89999) {
          return 1500;
        } else if (input >= 90000 && input <= 99999) {
          return 1600;
        } else if (input >= 100000) {
          return 1700;
        }
    }
    outputBasicPay.innerHTML = `Basic Pay: ${salary}`;
    outputNSSF.innerHTML = `NSSF: ${nssf}`;
    outputBeforeTax.innerHTML = `Before Tax: ${beforetax}`;    

}

 
 






















 // jQuery dependency
// $("input[data-type='currency']").on({
//     keyup: function(){
//         formatCurrency($(this));
//     },
//     blur: function(){
//         formatCurrency($(this),"blur");
//     }
// });

// function formatNumber(n){
//     // format number 123456789 to 123,456,789
//     return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// }

// function formatCurrency(input, blur){
//     // appends $ to value, validates decimal side and puts cursor back in the right position
    
//     // get input value
//     var inputValue = input.val();
//     // don't validate empty input
//     if (inputValue === ""){
//         return;
//     }
//     // original length
//     var originalLength = inputValue.length;
//     // intial caret position
//     var caretPosition = input.prop("selectionStart");
//     // check for decimal
//     if(inputValue.indexOf(".") >= 0){
//         // Gets position of first decimal. This prevents multiple decimals from being entered
//         var decimalPosition = inputValue.indexOf(".");
//         // Splits number by decimal point
//         var leftSide = inputValue.substring(0, decimalPosition);
//         var rightSide = inputValue.substring(decimalPosition);
//         // Adds commas to the left side of the number
//         leftSide = formatNumber(leftSide);
//         // Validates right side
//         rightSide = formatNumber(rightSide);
//         // On blur makes sure 2 numbers after decimal
//         if (blur === "blur"){
//             rightSide += "00";
//         }
//         // Limits decimal to only 2 digits 
//         rightSide = rightSide.substring(0, 2);
//         // Joins number by . 
//         inputValue = leftSide + "." + rightSide;
//     }else {
//         // If no decimal entered, it adds commas to the number and removes all non-digits 
//         inputValue = formatNumber(inputValue);
//         inputValue = inputValue;
//         // Final formatting 
//         if (blur === "blur"){
//             inputValue += ".00";
//         }
//     }
//     // Sends updated string to input 
//     input.val(inputValue);
//     // Puts caret back in the right position 
//     var updatedLength = inputValue.length;
//     caretPosition = updatedLength - originalLength + caretPosition;
//     input[0].setSelectionRange(caretPosition, caretPosition)
// }