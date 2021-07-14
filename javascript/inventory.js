async function addItem() {
    let div = document.createElement('div');
    div = document.getElementById('item-card').cloneNode(true);
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    div.querySelector("#item-title").innerHTML = itemName;
    div.querySelector("#item-quantity").innerHTML = itemQuantity;
    document.getElementById('items').appendChild(div);
    //await addItem(itemName, itemQuantity);
}

async function minus(id)
{
    var newer = id.parentElement.parentElement.parentElement;
    newer.querySelector("#item-quantity").innerHTML = parseInt(newer.querySelector("#item-quantity").innerHTML) - 1;
    console.log(id.parentElement.parentElement.parentElement);
}

async function plus(id)
{
    var newer = id.parentElement.parentElement.parentElement;
    newer.querySelector("#item-quantity").innerHTML = parseInt(newer.querySelector("#item-quantity").innerHTML) + 1;
    console.log(id.parentElement.parentElement.parentElement);
}