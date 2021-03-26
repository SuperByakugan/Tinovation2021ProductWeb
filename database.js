var user;
var uid;


async function addItem() {
	//item is the name of the item and quantity is how much of the item
	//change the ids to what the text fields actually are
    const item = {
        document.getElementById("item").value: document.getElementById("quantity").value
    };
	
	//not sure what url should be so will figure that out, shud be the id + '/' + uid
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


async function getItemQuantity(itemName) {
	//add in url later and should have + '/' + uid
    const res = await fetch('url');
    if (res.ok) {
		//json will be a list of all the items, which will have 
        let json = await res.json();
        console.log(json);
		return json.itemName;
        //document.getElementById("recipe-title").innerHTML = json.date;
    } else {
        //document.getElementById("recipe-title").innerHTML = "Error occurred while trying to fetch recipe!";
    }
}


