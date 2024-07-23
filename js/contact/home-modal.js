function openModal1() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/jNQXAC9IVRw?si=Tpj-Qq2SyutbmUUF";
}
function openModal2() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/3KtWfp0UopM?si=4iPBBkoMCQ1OOXJq";
}
function openModal3() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/4WXs3sKu41I?si=TZ9WoLJAldIKcM-5";
}



function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("youtubeVideo").src = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const humBtn = document.querySelector(".hum-btn");
  const menu = document.querySelector(".box_ ul");
  const instagram = document.querySelector(".instagram")

  humBtn.addEventListener("click", () => {
    humBtn.classList.toggle("open");
    menu.classList.toggle("open");
    instagram.classList.toggle("open")
  });
});


