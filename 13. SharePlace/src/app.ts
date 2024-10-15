// Code goes here!

const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddress(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  
}

form.addEventListener("submit", searchAddress);
