const form = document.querySelector('form');
const email = document.querySelector('input');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputValue = email.value;
  if (validateEmail(inputValue)) {
    form.classList.remove('error');
  } else {
    form.classList.add('error');
    email.placeholder = 'example@example.com';
  }
});

function validateEmail(inputValue) {
  return emailRegex.test(inputValue);
}
