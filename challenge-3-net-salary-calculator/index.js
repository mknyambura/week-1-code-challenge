function netSalary(){
    let salary = parseInt(document.getElementById('salary-month').value);
    document.getElementById('basicPay').innerHTML = `Basic Salary: ${parseInt(salary)}`;

    let nssf = parseInt(salary * 0.06);
    document.getElementById('nssfPay').innerHTML = `NSSF: ${nssf}`;

    let beforetax = parseInt(salary - nssf);
    document.getElementById('beforeTax').innerHTML = `Before Tax: ${beforetax}`
    
    let tax;
    if (salary >0 && salary <= 24000) {
        tax = parseInt(salary * 0.1);
    }else if (salary > 24000 && salary <= 32333){
        tax = parseInt(salary * 0.25);
    }else if (salary > 32333){
        tax = parseInt(salary * 0.3);
    }
    document.getElementById('taxAmount').innerHTML = `Income Tax: ${tax}`
    
   
    let relief;
    if (salary > 25589){
        relief = parseInt(2400);
    }else if (salary >0 && salary <= 25589) {
        relief = parseInt(0);
    }
    document.getElementById('personalRelief').innerHTML = `Personal Relief: ${relief}`;
    
    let paye;
    if (salary > 25589){
        paye = tax - relief;
    }else if (salary >0 && salary <= 25589){
        paye = tax - 0;
    }
    document.getElementById('payePay').innerHTML = `P.A.Y.E: ${paye}`;

    let aftertax = parseInt(beforetax - paye);
    document.getElementById('afterTax').innerHTML = `Pay After Tax: ${aftertax}`;
    
    let nhif;
    if (salary >= 0 && salary <= 5999) {
        nhif = parseInt(150);
    } else if (salary >= 6000 && salary <= 7999) {
        nhif = parseInt(300);
    } else if (salary >= 8000 && salary <= 11999) {
        nhif = parseInt(400);
    } else if (salary >= 12000 && salary <= 14999) {
        nhif = parseInt(500);
    } else if (salary >= 15000 && salary <= 19999) {
        nhif = parseInt(600);
    } else if (salary >= 20000 && salary <= 24999) {
        nhif = parseInt(750);
    } else if (salary >= 25000 && salary <= 29999) {
        nhif = parseInt(850);
    } else if (salary >= 30000 && salary <= 34999) {
        nhif = parseInt(900);
    } else if (salary >= 35000 && salary <= 39999) {
        nhif = parseInt(950);
    } else if (salary >= 40000 && salary <= 44999) {
        nhif = parseInt(1000);
    } else if (salary >= 45000 && salary <= 49999) {
        nhif = parseInt(1100);
    } else if (salary >= 50000 && salary <= 59999) {
        nhif = parseInt(1200);
    } else if (salary >= 60000 && salary <= 69999) {
        nhif = parseInt(1300);
    } else if (salary >= 70000 && salary <= 79999) {
        nhif = parseInt(1400);
    } else if (salary >= 80000 && salary <= 89999) {
        nhif = parseInt(1500);
    } else if (salary >= 90000 && salary <= 99999) {
        nhif = parseInt(1600);
    } else if (salary >= 100000) {
        nhif = parseInt(1700);
    }
    document.getElementById('nhifPay').innerHTML = `NHIF ${nhif}`;

    let netpay = parseInt(aftertax - nhif)
    document.getElementById('netSalary').innerHTML = `Net Salary: ${netpay}`;
    
}
// netSalary();

 
 






















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