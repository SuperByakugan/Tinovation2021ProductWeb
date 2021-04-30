function changeView(){
    if(document.getElementById("Adder").style.display == "none"){
        document.getElementById("Adder").style.display = "flex";
        document.getElementById("SeeItems").style.display = "none";
    }else{
        document.getElementById("Adder").style.display = "none";
        document.getElementById("SeeItems").style.display = "flex";    
    }
}