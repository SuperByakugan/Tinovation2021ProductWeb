async function addItem() {
    let div = document.createElement('div');
    div = document.getElementById('item-card').cloneNode(true);
    document.getElementById('items').appendChild(div);

    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    await addItem(itemName, itemQuantity);
}