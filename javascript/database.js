var user;
var uid;

//adds items to their list by getting the item from a field and quantity from a field and adding it
//in the format of item: quantity in the JSON so quantities can be accesses using the item name
async function addItem() {
    //item is the name of the item and quantity is how much of the item
    //TODO: CHANGE THE IDS TO WHAT THE TEXT FIELDS ACTUALLY ARE
    var itemName = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    const item = {
        itemName: quantity
    };

    //TODO: NOT SURE WHAT URL SHOULD BE SO WILL FIGURE THAT OUT, SHUD BE THE ID + '/' + UID
    const res = await fetch('url', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(item),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully added your recipe!')
    } else {
        alert('An error occurred while trying to add your recipe');
    }
}

//fetches the corresponding quantity value stored in the JSON
async function getItemQuantity(itemName) {
    //TODO: ADD IN URL LATER AND SHOULD HAVE + '/' + UID
    const res = await fetch('url');
    if (res.ok) {
        //json will be a list of all the items, which will have quantity when grabbing item
        let json = await res.json();
        console.log(json);
        if (json.itemName == null) return 0;
        return json.itemName;

    } else {
        alert('An error occurred while trying to fetch your recipe');
    }
}


//onclick methods for getting quantities
//TODO: ADD WHEN HAVE FRONT END LAYOUT
/* format should be

function click(){
    itemName = document.getElementById("FIELD").value;
    quantity = getItemQuantity(itemName);
    document.getElementById("FIELD 2").value = quantity
}

*/
