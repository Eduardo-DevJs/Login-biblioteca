const user = document.querySelector('[data-input="user"]');
const password = document.querySelector('[data-input="password"]');
const erros = document.querySelectorAll('small');

function verificarCampos(e) {
  e.preventDefault();
  if (user.value === '' || password.value === '') {
    erros.forEach((erro) => {
      erro.classList.add('erro');
    });
  } else {
    erros.forEach((erro) => {
      erro.classList.remove('erro');
    });
  }
}

document.querySelector('button').addEventListener('click', verificarCampos);
