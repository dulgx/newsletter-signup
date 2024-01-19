const submit = document.getElementById("submit");
const undsen = document.getElementById("main");
const thanks = document.getElementById("thankyou");
const emails = document.getElementById("email");
const uMail = document.getElementById("user-mail");

emails.addEventListener("input", function () {
    event.preventDefault();
    var userInMail = emails.value;
    uMail.textContent = userInMail;
});

submit.addEventListener("click", function () {
    event.preventDefault();
    undsen.style.display = "none";
    thanks.style.display = "block";
});
thanks.addEventListener("click", function () {
    event.preventDefault();
    emails.value = "";
    thanks.style.display = "none";
    undsen.style.display = "";
});

