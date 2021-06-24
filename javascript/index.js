window.onload = function () {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("User: " + user)
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out
            // ...
            console.log('User is signed out')
        }
    });
};
