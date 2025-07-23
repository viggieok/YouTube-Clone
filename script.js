document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar");
  const videoGrid = document.querySelector(".video-grid");
  const videos = Array.from(videoGrid.children);

  function filterVideos() {
    const query = searchInput.value.toLowerCase();
    videos.forEach((video) => {
      const title = video
        .querySelector(".video-title")
        .textContent.toLowerCase();
      const author = video
        .querySelector(".video-author")
        .textContent.toLowerCase();
      if (title.includes(query) || author.includes(query)) {
        video.style.display = "";
      } else {
        video.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterVideos);

  const searchButton = document.querySelector(".search-button");
  if (searchButton) {
    searchButton.addEventListener("click", filterVideos);
  }
});
