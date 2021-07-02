/*backend should use this function to really change the username and other information
            here just a template is given
            */
           function updateInfo(){
            if(document.getElementById("update").innerHTML.localeCompare("Update Profile") === 0){
                let updates = document.getElementsByClassName("profileObject");
                let displays = document.getElementsByClassName("infoDisplay");
                for(let i = 0; i < updates.length; i++){
                    if(i === 0){
                        displays[i].src = updates[i].value;
                        updates[i].value = "";
                    }else{
                        displays[i].innerHTML = updates[i].value;
                    }
                }
            }else{
                editProfile();
            }
        }


        function editProfile(){
            let divContainer = document.getElementById("information");
            for(let i = 0; i < 6; i++){
                let informationUpdates = document.createElement("textarea");
                informationUpdates.classList.add("profileObject");
                informationUpdates.style.position = "relative";
                informationUpdates.style.display = "flex";
                informationUpdates.style.alignItems = "center";
                informationUpdates.style.marginLeft = "auto";
                informationUpdates.style.marginRight = "auto";
                if(i < 3){
                    let idValue;
                    let insideHTML;
                    if(i === 0){
                        idValue = "username";
                        insideHTML = "Set Username";
                    }else if(i === 1){
                        idValue = "info";
                        insideHTML = "Other Info";
                    }else{
                        idValue = "info2";
                        insideHTML = "Other Info";
                    }
                    informationUpdates.innerHTML = insideHTML;
                    informationUpdates.id = idValue;
                    divContainer.appendChild(informationUpdates);
                }else{
                    let informationDisplay = document.createElement("P");
                    informationDisplay.classList.add("infoDisplay");
                    let insideHTML;
                    if(i == 3){
                        insideHTML = "Set Username";
                    }else if(i === 4){
                        insideHTML = "Other Info";
                    }else{
                        insideHTML = "Other Info";
                    }
                    informationDisplay.innerHTML = insideHTML;
                    divContainer.appendChild(informationDisplay);
                }
            }
            document.getElementById("imgLink").style.display = "block";
            document.getElementById("update").innerHTML = "Update Profile";
            document.getElementById("update").style.float = "none";
            divContainer.appendChild(document.getElementById("update"));
            document.body.appendChild(divContainer);
        }