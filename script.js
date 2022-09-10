const btn = document.querySelector('button');

btn.addEventListener('click', updateBtn);

function updateBtn() {

  if (btn.textContent === 'Sign in') {
    btn.textContent = 'Sign out';
  } else {
    btn.textContent = 'Sign in';
  }
}