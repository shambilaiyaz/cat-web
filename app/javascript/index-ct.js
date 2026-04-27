// INDEX-CT — Index page initialization
// ===================================================================================
// Greet user, fill email username, init power commit system.
// Extracted from inline script in index.html.erb.
// ===================================================================================

document.addEventListener("DOMContentLoaded", function () {
  // Greet the user by name from sessionStorage (set during login)
  var username = sessionStorage.getItem("ct_username");
  var welcom = document.getElementById("welcom");
  if (username && welcom) {
    welcom.textContent = "learn about cat! " + username + "!";
  } else {
    // Not logged in — redirect back to login
    // window.location.href = "/login";
  }

  // Initialize the power commit system
  initPower();
});
