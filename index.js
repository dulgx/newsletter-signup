const submit = document.getElementById("submit");
const undsen = document.getElementById("main");
const thanks = document.getElementById("thankyou");
const emails = document.getElementById("email");
const uMail = document.getElementById("user-mail");
const validation = document.getElementById("emailText1");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


emails.addEventListener("input", function () {
    let userInMail = emails.value;
    uMail.textContent = userInMail;
    validation.style.display = "none";
});

function isValidEmail() {
    return emailRegex.test(uMail.textContent);
}

submit.addEventListener("click", function () {
    if (emails.value === '' || !isValidEmail()) {
        validation.style.display = "block";
    } else {
        undsen.style.display = "none";
        thanks.style.display = "block";
    }

});
thanks.addEventListener("click", function () {
    emails.value = "";
    thanks.style.display = "none";
    undsen.style.display = "";
});

