let signUpButton = document.getElementById("signup");
let loginButton = document.getElementById("login");
let forms = document.getElementById("forms");
let signUpForm = document.getElementById("signUpForm");
let loginForm = document.getElementById("loginForm");

function removeButton(id) {
  if (id == "signup") {
    signUpButton.style.opacity = "0";
    loginButton.style.opacaity = "1";
    forms.classList.remove('toRight')
    forms.classList.add('toLeft')
    loginForm.style.display = 'none'
    signUpForm.style.display = 'block'
  } else {
    loginButton.style.opacity = "0";
    signUpButton.style.opacity = "1";
    forms.classList.remove('toLeft')
    forms.classList.add('toRight')
    signUpForm.style.display = 'none'
    loginForm.style.display = 'block'
  }
}