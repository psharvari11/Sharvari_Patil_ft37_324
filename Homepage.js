const API_KEY = "";
const videoContainer = document.getElementById("videos");
const searchInput = document.getElementById("searchinput");
const searchBtn = document.getElementById("searchbtn");

async function fetchPopularVideos() {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`);
  const data = await res.json();
  renderVideos(data.items);
}

function renderVideos(videos) {
  videoContainer.innerHTML = "";
  videos.forEach(video => {
    const { id, snippet, statistics } = video;
    const card = document.createElement("div");
    card.classList.add("video-card");
    const uploadDate = new Date(snippet.publishedAt).toDateString();

    card.innerHTML = `
      <img src="${snippet.thumbnails.medium.url}" />
      <div class="video-info">
        <h4>${snippet.title}</h4>
        <p>${snippet.channelTitle}</p>
        <p>${statistics.viewCount} views • ${uploadDate}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      window.location.href = `video.html?videoId=${id}`;
    });

    videoContainer.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
});

fetchPopularVideos();
