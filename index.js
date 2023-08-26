function validateForm() {
    let name = document.querySelector("#username").value;
    let pas = document.querySelector("#password").value;
    let l = pas.length;

    if (name !== "" && pas !== "") {
        if (l >= 8) {  // Check if the password length is at least 8
            alert("Details have been entered correctly");
        } else {
            alert("Password must be at least 8 characters");
        }
    } else {
        alert("Error in details entered");
    }
}