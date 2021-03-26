//3/12/2021 weird bug where database wipes itself when changes login, will figure out later
var user;
var uid;
var arr = []; //database of items
var items = []; //user specific list of indexes

//get global  of items
var arRef = firebase.database().ref('ar');
arRef.on('value', (snapshot) => {
	const data = snapshot.val();
	arr = data;
	if(items == null) items = [];
});

//add item to user specific item list, also updating quantities
function add(){
	var item = document.getElementById("item").value; //change to actual element id later
	var quantity = document.getElementById("quantity").value; //change to actual element id later
	if(!arr.includes(item)){
		arr.push(item);
		firebase.database().ref().set ({
			ar: arr,
		});
	}
	items.push([arr.indexOf(item), quantity]);
	firebase.database().ref('Users/' + uid).set({
		items: items
	});
}

//sets the users items and quantities stored in database to local variables
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
	  console.log("dyld");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
	var itemRef = firebase.database().ref('users/' + uid + '/items');
	itemRef.on('value', (snapshot) => {
		const data = snapshot.val();
		items = data;
		console.log(items + " hello");
		if(items == null) items = [];
	});
    // ...
  } else {
    // User is signed out
    // ...
  }
});
