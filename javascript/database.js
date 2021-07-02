var user;
var uid;

async function getToken(username, password) {
    const info = {
        "username": username,
        "password": password
    };

    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getToken', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(info),
    });

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        localStorage.token = json["access_token"]
        return json["access_token"];
    } else {
        alert('An error occurred while trying to get the token');
    }
}

async function createProfile() {
    const u = firebase.auth().currentUser;
    const data = {
        id: u.uid,
        username: u.username,
        email: u.email,
    }

    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/createProfile', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully created your profile!')
        window.location = "dashboard.html";
    }
}

async function getProfile() {
    const u = firebase.auth().currentUser;
    const res = await fetch(`https://portablefridge-311105.wm.r.appspot.com/getProfile?id=${u.uid}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        return json;
    } else {
        alert('An error occurred while trying to get the profile');
    }
}

//updateProfile method JSON RESULT IS ONLY PRINTED IN CONSOLE AS OF RIGHT NOW, NEED TO ACTUALLY GET INFORMATION FROM JSON
async function updateProfile() {
    const u = firebase.auth().currentUser;
    const data = {
        "id": u.uid
    }
    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/updateProfile', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
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

async function deleteProfile() {
    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/deleteProfile', {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
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

async function updateItems() {
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

async function getInventory() {
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

async function getCommunityRecipes() {
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

async function postRecipes() {
    if (localStorage.getItem("token") == null) return console.log("User is not logged in.");
    const u = firebase.auth().currentUser;
    console.log(u);

    const name = document.getElementById("recipe-name").value;
    const ingredients = document.getElementById("ingredients").value;
    const prepTime = document.getElementById("prep-time").value;
    const cookTime = document.getElementById("cook-time").value;
    const directions = document.getElementById("directions").value;
    const data = {
        "id": u.uid,
        "name": name,
        "ingredients": ingredients,
        "prepTime": prepTime,
        "cookTime": cookTime,
        "directions": directions,
    }

    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/postRecipes', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
    });
    console.log(res.ok);

    if (res.ok) {
        let json = await res.json();
        console.log(json);
        alert('Successfully posted your recipe!')
    } else {
        alert('An error occurred while trying to post your recipe');
    }
}

async function getRecipes() {
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

async function likeRecipes() {
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

async function addItem(itemName, quantity) {
    const item = {
        itemName: itemName,
        quantity: quantity
    };
    const u = firebase.auth().currentUser;
    const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/addItems?id=' + u.uid, {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
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
