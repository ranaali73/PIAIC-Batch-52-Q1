/* Write a program that takes the number of units consumed by a user 
if it is greater than 100 then add 10% tax 
 if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill.*/
let perUnitPrice = 10;

function taxOnUnits(units: number) {
    let tax: number = 0;
    let totalBillAmount = perUnitPrice * units;

    if (units > 500) {
        tax = (totalBillAmount * 25) / 100;
        display(totalBillAmount, tax, units, 25)
    }
    else if (units > 200) {
        tax = (totalBillAmount * 15) / 100;
        display(totalBillAmount, tax, units, 15)
    }
    else if (units > 100) {
        tax = (totalBillAmount * 10) / 100;
        display(totalBillAmount, tax, units, 10)
    }
    else {
        tax = 0;
        display(totalBillAmount, tax, units)
    }


}

function display(totalBillAmount: number, tax: number, units: number, taxPercentage?: number) {
    let totalBillAmountWithTax: number = totalBillAmount + tax;
    console.log(`Unit Price: ${perUnitPrice} \nConsumed Units: ${units}\nTotal Bill Amount: ${totalBillAmount}`);

    if (tax > 0) {
        console.log(`Tax Percentage: ${taxPercentage} Tax Amount: ${tax} Total Bill Including Tax: ${totalBillAmountWithTax} \n`);
    } else {
        console.log(`Tax: ${tax}\n`);
    }

}
// Function Calls
taxOnUnits(90);
taxOnUnits(150);
taxOnUnits(300);
taxOnUnits(600);
taxOnUnits(50); 
