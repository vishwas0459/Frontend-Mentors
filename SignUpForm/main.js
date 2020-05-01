const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm(form)) {
    form.classList.remove('error');
  } else {
    form.classList.add('error');
  }
});

function validateForm(form) {
  console.log(form);
}
