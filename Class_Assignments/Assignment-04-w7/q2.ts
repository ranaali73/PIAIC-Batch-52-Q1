// Implement a simple shopping cart program using an array.
//  Create functions to add items, remove items, and update quantities using the splice method.
//  Print the cart's contents after each operation

let shoppingCartArray: string[] = [];

// Adding Item to Cart
function addItem(index: number, delNoOfItem: number, item: string) {
    shoppingCartArray.splice(index, delNoOfItem, item);
    console.log(`Item added successfully: ${item}\nCart's content: ${shoppingCartArray}`);
    updateQuantity();
}

// Removing Item
function removeItem(index: number, deletedElements: number) {
    let removedItems = shoppingCartArray.splice(index, deletedElements);
    console.log(`At index: ${index}\nRemoved Items: ${removedItems}\nCart's content: ${shoppingCartArray}`);
    updateQuantity();
}

// Update Quantity
function updateQuantity() {
    let quantity = shoppingCartArray.length;
    console.log(`Total Quantity is: ${quantity}\n`);
}
// Example usage
addItem(0, 0, 'Apple');
addItem(1, 0, 'Mango');
addItem(2, 0, 'Banana');
removeItem(0, 1);
