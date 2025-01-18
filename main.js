function btnSubmitEventHandler(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  if (form.reportValidity()) {
    alert("Form submitted");
  }
}

function formEmailEventListener(event) {
  let formEmailMsg = document.querySelector("#formEmailMsg");
  if (!event.target.checkValidity()) {
    formEmailMsg.textContent =
      "Email needs to be in format 'email@example.com'";
  } else {
    formEmailMsg.textContent = "";
  }
}

function formCountryEventListener(event) {
  let formCountryMsg = document.querySelector("#formCountryMsg");
  if (!event.target.checkValidity()) {
    formCountryMsg.textContent = "Please enter a country name";
  } else {
    formCountryMsg.textContent = "";
  }
}

function formZipCodeEventListener(event) {
  let formZipCodeMsg = document.querySelector("#formZipCodeMsg");
  if (!event.target.checkValidity()) {
    formZipCodeMsg.textContent = "Zip code requires four numbers";
  } else {
    formZipCodeMsg.textContent = "";
  }
}

function formPasswordEventListener(event) {
  let formPasswordMsg = document.querySelector("#formPasswordMsg");
  if (!event.target.checkValidity()) {
    formPasswordMsg.textContent =
      "Password requires atleast 1 special character, 1 uppercase letter, 1 lowercase letter, 1 number and must have a length of 8";
  } else {
    formPasswordMsg.textContent = "";
  }
}

function formPasswordConfirmEventListener(event) {
  let formPasswordConfirmMsg = document.querySelector(
    "#formPasswordConfirmMsg"
  );
  let formPasswordConfirm = document.querySelector("#formPasswordConfirm");
  let formPassword = document.querySelector("#formPassword");
  // console.log(`pass: ${formPassword.value}, confirm: ${formPasswordConfirm.value}`);
  if (formPasswordConfirm.value != formPassword.value) {
    formPasswordConfirm.setCustomValidity("Passwords do not match");
    formPasswordConfirmMsg.textContent =
      formPasswordConfirm.validationMessage;
  } else {
    formPasswordConfirm.setCustomValidity("");
    formPasswordConfirmMsg.textContent =
      formPasswordConfirm.validationMessage;
  }
}

function main() {
  let btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", btnSubmitEventHandler);

  let formEmail = document.querySelector("#formEmail");
  formEmail.addEventListener("input", formEmailEventListener);

  let formCountry = document.querySelector("#formCountry");
  formCountry.addEventListener("input", formCountryEventListener);

  let formZipCode = document.querySelector("#formZipCode");
  formZipCode.addEventListener("input", formZipCodeEventListener);

  let formPassword = document.querySelector("#formPassword");
  formPassword.addEventListener("input", formPasswordEventListener);

  let formPasswordConfirm = document.querySelector("#formPasswordConfirm");
  formPasswordConfirm.addEventListener(
    "input",
    formPasswordConfirmEventListener
  );
}

main();
