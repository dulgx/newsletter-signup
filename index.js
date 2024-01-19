const submit = document.getElementById("submit");
const undsen = document.getElementById("main");
const thanks = document.getElementById("thankyou");
const emails = document.getElementById("email");
const uMail = document.getElementById("user-mail");

emails.addEventListener("input", function () {
    var userInMail = emails.value;
    uMail.textContent = userInMail;
});

submit.addEventListener("click", function () {
    if (emails.value === '') {
        console.log("Its empty");
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

