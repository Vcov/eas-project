const userInput = document.getElementById("user-input")
const passInput = document.getElementById("pass-input")
const mailInput = document.getElementById("mail-input")
const signBtn = document.getElementById("sign-btn")

signBtn.addEventListener("click", () => {

    while (true) {
        if (userInput.value.length < 3) {
            alert("Username must be at least 3 characters long!")
            break
        }

        if (passInput.value.length < 7) {
            alert("Password must contain at least 7 characters")
            break
        }

        localStorage.setItem("username", userInput.value)
        window.location.href = "./welcome.html"
        break
    }
   
})