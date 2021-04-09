var user;
var uid;
var name; //food name
var ingredients = [];

async function submitSignUp(){
	ingredients = [];
	name = document.getElementById("passwords").value;
}

async function add(){
	ingredients.push(document.getElementById("emaiL").value);
}

//also someone should change the id and function names for the html cuz they are kind of weird
async function submitINFO(){
	if(name != null){
		var makeTime = document.getElementById("name").value;
		var steps = document.getElementById("phone").value;
		var otherInfo = document.getElementById("color").value;
		const item = {
			name: [ingredients, makeTime, steps, otherInfo]
		};
		
		//TODO: NOT SURE WHAT URL SHOULD BE SO WILL FIGURE THAT OUT, SHUD BE THE ID + '/' + UID + '/' + 'recipes'
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
}