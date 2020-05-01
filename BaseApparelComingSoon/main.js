const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.querySelector('input');
  if (validateEmail(email.value)) {
    form.classList.remove('error');
  } else {
    form.classList.add('error');
  }
});

function validateEmail(email) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}
