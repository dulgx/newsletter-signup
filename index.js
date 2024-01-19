const submit = document.getElementById("submit");
const undsen = document.getElementById("main");
const thanks = document.getElementById("thankyou");
const emails = document.getElementById("email");
const userMail = document.getElementById("user-mail").textContent;


submit.addEventListener("click", function () {
    undsen.style.display = "none";
    thanks.style.display = "block";
});
thanks.addEventListener("click", function () {
    thanks.style.display = "none";
    undsen.style.display = "";
});

emails.addEventListener("input", function () {
    var userInMail = emails.value;
    console.log(userInMail);
});