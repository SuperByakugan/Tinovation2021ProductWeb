window.onload = function () {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        } else {
            console.log('User is signed out')
            if (!window.location.href.includes("index.html")) {
                window.location = "index.html";
            }
        }
    });
};
