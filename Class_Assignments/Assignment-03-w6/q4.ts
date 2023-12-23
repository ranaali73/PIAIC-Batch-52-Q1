// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function getDiscount(amountInDollar: number): number {
    let discount: number;
    if (amountInDollar > 100) {
        discount = (amountInDollar * 10) / 100;
    } else {
        discount = (amountInDollar * 5) / 100;
    }
    console.log(`Amount: $${amountInDollar}, Discount: $${discount}`);
    return discount;
}

getDiscount(10);
