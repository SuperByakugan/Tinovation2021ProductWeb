function addItem() {
    let div = document.createElement('div');
    div = document.getElementById('item-card').cloneNode(true);
    document.getElementById('items').appendChild(div);
}