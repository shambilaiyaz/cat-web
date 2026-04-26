// CT — Core
// ===================================================================================

function checkAccess() {
  let paskey = prompt(
    "hint: what are you looking for in my web, learning? (Y/N)",
  );
  if (paskey && paskey.trim() === "Yes") {
    document.getElementById("ful-page").style.display = "block";
  } else {
    alert(
      " 'error' if your looking for that, my web is useless for you! find some other web pages",
    );
    checkAccess();
  }
}

function Login() {
  document.getElementById("login-overlay").style.display = "flex";
}

// submitLogin moved to check_box-ct.js
