var user;
var uid;

//getToken method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function getToken() {
    //if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
	//testing
	email = "foo@gmail.com";
	//testing
	password = "abc";
    const info = {
        "username": email,
		"password": password
    };

    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getToken', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully got the token!')
    } else {
        alert('An error occurred while trying to get the token');
    }
}

//getProfile method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function getProfile(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getProfile', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully got the profile!')
    } else {
        alert('An error occurred while trying to get the profile');
    }
}

//updateProfile method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function updateProfile(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const u = firebase.auth().currentUser;
	const data = {
		"id": u.uid
	}
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/updateProfile', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully updated the profile!')
    } else {
        alert('An error occurred while trying to update the profile');
    }
}

//deleteProfile method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function deleteProfile(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/deleteProfile', {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully deleted the profile!')
    } else {
        alert('An error occurred while trying to delete the profile');
    }
}

//updateItems method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function updateItems(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const u = firebase.auth().currentUser;
	const data = {
		"id": u.uid
	}
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/updateItems', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully updated items!')
    } else {
        alert('An error occurred while trying to update the items');
    }
}

//getInventory method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function getInventory(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getInventory', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully got the inventory!')
    } else {
        alert('An error occurred while trying to get the inventory');
    }
}

//getCommunityRecipes method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function getCommunityRecipes(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getCommunityRecipes', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully got community recipes!')
    } else {
        alert('An error occurred while trying to get community recipes');
    }
}

//postRecipes method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function postRecipes(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const u = firebase.auth().currentUser;
	const data = {
		"id": u.uid
	}
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/postRecipes', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully posted recipes!')
    } else {
        alert('An error occurred while trying to post recipes');
    }
}

//getRecipes method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function getRecipes(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getRecipes', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully got recipes!')
    } else {
        alert('An error occurred while trying to get recipes');
    }
}

//likeRecipes method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function likeRecipes(){
	//if (localStorage.getItem("email") == null) return console.log("User is not logged in.");
	const u = firebase.auth().currentUser;
	const data = {
		"id": u.uid
	}
	const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/likeRecipes', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
			"Authorization": 'Bearer ${localStorage.getItem("token")}'
        },
        body: JSON.stringify(info),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully liked recipes!')
    } else {
        alert('An error occurred while trying to like recipes');
    }
}

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
