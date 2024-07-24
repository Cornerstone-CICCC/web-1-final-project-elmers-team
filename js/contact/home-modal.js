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

document.addEventListener('DOMContentLoaded', function () {
  const videosContainer = document.querySelector('.videos');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const videoElements = document.querySelectorAll('.videos > div');

  let currentIndex = 0;

  function updateCarousel() {
    const videoWidth = videoElements[0].offsetWidth;
    videosContainer.style.transform = `translateX(${-currentIndex * (videoWidth + 20)}px)`; // 20px is the gap
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < videoElements.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.openModal1 = function() {
    openModal('https://www.youtube.com/embed/video1');
  };

  window.openModal2 = function() {
    openModal('https://www.youtube.com/embed/video2');
  };

  window.openModal3 = function() {
    openModal('https://www.youtube.com/embed/video3');
  };

  function openModal(videoUrl) {
    const modal = document.getElementById('myModal');
    const iframe = document.getElementById('youtubeVideo');
    iframe.src = videoUrl;
    modal.style.display = 'block';
  }

  window.closeModal = function() {
    const modal = document.getElementById('myModal');
    const iframe = document.getElementById('youtubeVideo');
    iframe.src = '';
    modal.style.display = 'none';
  };
});
