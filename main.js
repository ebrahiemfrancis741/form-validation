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

function main() {
  let btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", btnSubmitEventHandler);

  let formEmail = document.querySelector("#formEmail");
  formEmail.addEventListener("input", formEmailEventListener);

  let formCountry = document.querySelector("#formCountry");
  formCountry.addEventListener("input", formCountryEventListener);
}

main();
