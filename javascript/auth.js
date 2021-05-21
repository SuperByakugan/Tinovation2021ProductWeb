var user;
var signedUp = false;

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;
  const confirmationPassword = document.getElementById("pwd2").value;
  if (password != confirmationPassword) {
    console.log(`Passwords don't match`);
  } else {
    console.log(`Email: ${email}\nPassword: ${password}`);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const token = getToken(password);

        user = userCredential.user;
        createProfile();

        signedUp = true;
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}

async function getToken(password) {
  // return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMTYwODAxNywianRpIjoiMWFlZWYwYjktYTc0Yy00YmI1LWIzODQtZGI2Y2I0ODBlMGRkIiwibmJmIjoxNjIxNjA4MDE3LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiVGVzdCIsImV4cCI6MTYyMTYwODkxN30.sr3yyamudvsGZrWmdbJjNNsmtrX4oDrz_6MfwIb8oc4";
  const u = firebase.auth().currentUser;
  const data = {
    username: u.displayName,
    password: password,
  }

  const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/getToken', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    let json = await res.json();
    console.log(json["access_token"]);
    localStorage.setItem("token", json["access_token"]);
  } else {
    alert('An error occurred while retrieving the token.');
  }
}

async function createProfile() {
  const u = firebase.auth().currentUser;
  const data = {
    id: u.uid,
    username: u.displayName,
    email: u.email,
  }

  const res = await fetch('https://portablefridge-311105.wm.r.appspot.com/createProfile', {
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
    alert('Successfully created your profile!')
  } else {
    alert('An error occurred while creating your profile');
  }
}

function logIn() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user;
      const token = getToken();
      localStorage.setItem("token", token);
      console.log(user);
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);

    if (signedUp) {
      var firstName = document.getElementById("fname").value;
      var lastName = document.getElementById("lname").value;
      var vegetables = document.getElementById("vegetables").checked;
      var meat = document.getElementById("meat").checked;
      var dairy = document.getElementById("dairy").checked;
      let email = document.getElementById("email").value;
      let password = document.getElementById("pwd").value;
      writeUserData(uid, firstName, lastName, vegetables, meat, dairy, email, password);

    }
  } else {
    console.log("User is signed out");
  }
});

function logOut() {
  firebase.auth().signOut().then(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }).catch((error) => {

  });
}

function writeUserData(userId, firstName, lastName, vegetables, meat, dairy, email, password) {
  firebase.database().ref('users/' + userId).set({
    firstName: firstName,
    lastName: lastName,
    vegetables: vegetables,
    meat: meat,
    dairy: dairy,
    email: email,
    password: password
  });
}
