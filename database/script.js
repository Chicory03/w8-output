const email = document.querySelector("#email")
const password = document.querySelector("#password")
const button = document.querySelector("#button")

button.addEventListener("click", ()=> {
     const inputEmail = email.value;
     const inputPassword = password.value;
     localStorage.setItem("key-1", inputEmail);
     localStorage.setItem("key-2", inputPassword);
     email.value = "";
     password.value = "";
});

email.addEventListener("click", ()=> {
     const EmailAgain = localStorage.getItem("key-1");
     email.value = EmailAgain;
});

password.addEventListener("click", ()=> {
     const PasswordAgain = localStorage.getItem("key-2");
     password.value = PasswordAgain;
});

email.addEventListener("DOMContentLoaded", () => {
　　　email.value = EmailAgain;
});

password.addEventListener("DOMContentLoaded", ()=> {
     password.value = PasswordAgain;
});
