function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    localStorage.setItem("isLogin", "true");
    window.location.replace("index.html");
  } else {
    const popup = document.getElementById("popupError");
    popup.style.display = "flex";

    // auto close setelah 2 detik
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  }
}

function closePopup() {
  document.getElementById("popupError").style.display = "none";
}
