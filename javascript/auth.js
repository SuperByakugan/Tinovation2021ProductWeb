var user;
var signedUp = false;

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;
  const confirmationPassword = document.getElementById("pwd2").value;
  if (password != confirmationPassword) {
    alert("Passwords don't match.")
  } else {
    console.log(`Email: ${email}\nPassword: ${password}`);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        signedUp = true;
        user = userCredential.user;
        getToken(email, password).then(res => {
          localStorage.setItem("token", res);
          createProfile();
        });
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
        alert("An error occurred while creating your account.");
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
      alert("Incorrect email or password.")
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;

    if (signedUp) {
      var username = document.getElementById("username").value;
      var vegetables = document.getElementById("vegetables").checked;
      var meat = document.getElementById("meat").checked;
      var dairy = document.getElementById("dairy").checked;
      let email = document.getElementById("email").value;
      let password = document.getElementById("pwd").value;
      writeUserData(uid, username, vegetables, meat, dairy, email, password);
    }
  } else {
    console.log("User is signed out");
  }
});

function logOut() {
  firebase.auth().signOut().then(() => {
    localStorage.removeItem("token");
    window.location = "index.html";
  }).catch((error) => {
    alert("An error occurred while logging you out.")
    console.log(error);
  });
}

function writeUserData(userId, username, vegetables, meat, dairy, email, password) {
  firebase.database().ref('users/' + userId).set({
    username: username,
    vegetables: vegetables,
    meat: meat,
    dairy: dairy,
    email: email,
    password: password
  });
}

async function deleteAccount() {
  console.log("Deleting acocunt...");
  await deleteProfile();
  logOut();
}