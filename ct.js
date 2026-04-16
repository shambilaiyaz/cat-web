function showAlert() {
  alert("welcome to ct web");
}
// ===================================================================================
function playSound() {
  if (!window.speechSynthesis) {
    alert("Sorry, your browser does not support reading aloud!");
    return;
  }
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    document.getElementById("reader").textContent = "read for me";
    return;
  }
  let pageText = document.getElementById("ful-page").innerText;
  let utterance = new SpeechSynthesisUtterance(pageText);
  // Chrome loads voices asynchronously — wait for them if needed
  let voices = speechSynthesis.getVoices();
  if (voices.length === 0) {
    speechSynthesis.addEventListener(
      "voiceschanged",
      // ===================================================================================
      function handler() {
        speechSynthesis.removeEventListener("voiceschanged", handler);
        utterance.voice = speechSynthesis.getVoices()[0];
        speechSynthesis.speak(utterance);
      },
      { once: true },
    );
  } else {
    utterance.voice = voices[0];
    speechSynthesis.speak(utterance);
  }
  utterance.onend = function () {
    document.getElementById("reader").textContent = "read for me";
  };
  document.getElementById("reader").textContent = "stop reading";
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
