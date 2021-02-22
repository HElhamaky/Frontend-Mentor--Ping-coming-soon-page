let mail = document.querySelector(".form__input");
let errorMsg = document.querySelector(".form__input__error");
let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
mail.addEventListener("keyup", (e) => {
  if (!e.target.value.match(mailFormat) && e.target.value != "") {
    errorMsg.classList.add("visible");
  } else {
    errorMsg.classList.remove("visible");
  }
});
