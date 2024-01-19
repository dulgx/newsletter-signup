const submit = document.getElementById("submit");
const undsen = document.getElementById("main");
const thanks = document.getElementById("thankyou");

submit.addEventListener("click", function () {
    undsen.style.display = "none";
    thanks.style.display = "block";
});
thanks.addEventListener("click", function () {
    thanks.style.display = "none";
    undsen.style.display = "";
})