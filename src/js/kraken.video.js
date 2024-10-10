class Video {
  constructor(node) {
    this.node = node;
  }

  video() {
    const a = document.querySelectorAll(this.node);
    a.forEach((entry) => {
      entry.addEventListener("click", () => {
        const video = entry.querySelector(
          ".field--name-field-media-oembed-video",
        );
        const thumb = entry.querySelector(".field--name-thumbnail");
        thumb.classList.add("hidden");
        video.removeAttribute("hidden");
      });
    });
  }
}

const videos = new Video(".media--type-remote-video");
videos.video();
