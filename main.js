
function btnSubmitEventHandler(event){
  event.preventDefault();
  let form = document.querySelector("form");
  if(form.reportValidity()){
    alert("Form submitted");
  }
}

function formEmailEventListener(event){
  let formEmailMsg = document.querySelector("#formEmailMsg");
  if(!event.target.checkValidity()){
    formEmailMsg.textContent = "Email needs to be in format 'email@example.com'"
  }
  else{
    formEmailMsg.textContent = "";
  }
}

function main(){
  let btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", btnSubmitEventHandler);

  let formEmail = document.querySelector("#formEmail");
  formEmail.addEventListener("input", formEmailEventListener);
}

main();