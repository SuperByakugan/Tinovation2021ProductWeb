var currentTab = 0; // Current tab is set to be the first tab (0)
window.onload = function () {
    showTab(currentTab); // Display the current tab
    console.log(localStorage.token);
};

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("page");
    x[n].style.display = "block";
    // Remove all other displays that are not n
    for (let i = 0; i < x.length; i++) {
        if (i != n) x[i].style.display = "none";
    }
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("signup-button").style.display = "inline";
    } else {
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("signup-button").style.display = "none";
    }
    // ... and run a function that displays the correct step indicator:
    //fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("page");
    // Exit the function if any field in the current tab is invalid:
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // Display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("page");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    //if (valid) {
    //document.getElementsByClassName("step")[currentTab].className += " finish";
    //}
    return valid; // return the valid status
}