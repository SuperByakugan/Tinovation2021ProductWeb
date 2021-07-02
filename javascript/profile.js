window.onload = function () {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            console.log(await getProfile());
        }
    });
};


/*backend should use this function to really change the username and other information
            here just a template is given
            */
function updateInfo() {
    if (document.getElementById("update").innerHTML.localeCompare("Update Profile") === 0) {
        //let updates = document.getElementsByClassName("profileObject");
        //for(let i = 0; i < updates.length; i++){
        //if(i === 0){
        //   displays[i].src = updates[i].value;
        //updates[i].value = "";
        //}else{
        //displays[i].innerHTML = updates[i].value;
        //}
        //}
        if (document.getElementById("username").value.length > 0) {
            document.getElementById("user").innerHTML = document.getElementById("username").value;
            document.getElementById("username").value = "";
        }
        if (document.getElementById("imgLink").value.length > 0) {
            document.getElementById("pfp").src = document.getElementById("imgLink").value;
            document.getElementById("imgLink").value = "";
        }
    } else {
        editProfile();
    }
}


function editProfile() {
    let divContainer = document.createElement("DIV");
    divContainer.id = "information";
    //let divContainer = document.getElementById("information");
    for (let i = 0; i < 2; i++) {
        let informationUpdates = document.createElement("input");
        informationUpdates.classList.add("profileObject");
        //if(i < 4){
        let idValue;
        let insideHTML;
        if (i === 0) {
            idValue = "username";
            insideHTML = "Set Username";
        } else if (i === 1) {
            idValue = "imgLink";
            insideHTML = "Image Link";
        } else if (i == 2) {
            idValue = "info2";
            insideHTML = "Other Info";
        } else {
            idValue = "info3";
            insideHTML = "Other Info";
        }
        informationUpdates.placeholder = insideHTML;
        informationUpdates.id = idValue;
        divContainer.appendChild(informationUpdates);
        // }else{
        //     let informationDisplay = document.createElement("P");
        //     informationDisplay.classList.add("infoDisplay");
        //     divContainer.appendChild(informationDisplay);
        // }
    }
    //document.getElementById("imgLink").style.display = "block";
    document.getElementById("update").innerHTML = "Update Profile";
    //document.getElementById("update").style.float = "none";
    //divContainer.appendChild(document.getElementById("update"));
    console.log(document.getElementById("profileContent"));
    document.getElementById("profileContent").appendChild(divContainer);
}