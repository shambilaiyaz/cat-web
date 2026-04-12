function showAlert() {
  alert("welcome to ct web");
}
// ===================================================================================
function playSound() {
  let screenreader = new Audio(
    "https://drive.proton.me/urls/KVD236APGW#cfGjbaEPEiVy",
  );
  screenreader.play();
}
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
  let username = prompt("Enter your user name:");
  let paskey = prompt(
    "hint: what are you looking for?, in my web?, learning? (Y/N)",
  );

  if (paskey === "Yes") {
    document.getElementById("ful-page").style.display = "block";
    alert("Welcome, " + username + "!");
  } else {
    alert("Wrong username or password!");
    Login();
  }
}
