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
        signedUp = true;
        user = userCredential.user;
        createProfile();
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}

function logIn() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user;
      getToken(email, password).then(res => {
        localStorage.setItem("token", res);
        window.location = "dashboard.html";
      });
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
    localStorage.removeItem("token");
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
