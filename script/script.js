const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(value) {
  return regExp.test(value);
}

function updateText(email, text, emoji) {
  if (validateEmail(email)) {
    text.textContent = 'Круто, спасибо за доверие!';
    emoji.style.display = 'none';
  } else {
    text.textContent = 'Отремантируйте камеру';
    emoji.style.display = 'inline';
  }
}

document.querySelectorAll('.form__item').forEach(el => {
  el.addEventListener('input', function(evt) {
    const email = evt.target.value;
    const text = evt.target.nextElementSibling.firstChild.nextElementSibling;
    const emoji = evt.target.nextElementSibling.lastChild.previousElementSibling;
    updateText(email, text, emoji);
  })
});
