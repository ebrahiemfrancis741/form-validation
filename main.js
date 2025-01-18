
function btnSubmitEventHandler(event){
  console.log(event);
  event.preventDefault();
  let form = document.querySelector("form");
  if(form.reportValidity()){
    alert("Form submitted");
  }
}

function main(){
  let btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", btnSubmitEventHandler);
}

main();