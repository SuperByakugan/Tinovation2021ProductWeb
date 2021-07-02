window.onload = function () {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            console.log(await getCommunityRecipes());
        }
    });
};
