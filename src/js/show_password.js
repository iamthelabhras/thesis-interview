function togglePassword() {
  let toggledPassword = document.getElementById("password");
  let show_svg = document.getElementById("eye_show_password");
  let hide_svg = document.getElementById("eye_hide_password");
  
  if (toggledPassword.type === "password") {
    toggledPassword.type = "text";
    hide_svg.classList.toggle("hide");
    show_svg.classList.toggle("hide");
  } else {
    toggledPassword.type = "password";
    hide_svg.classList.toggle("hide");
    show_svg.classList.toggle("hide");
  }
}