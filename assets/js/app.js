const images = document.querySelectorAll(".container .images img");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery-inner img");
const close = document.querySelector(".gallery .close");

const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

function showGallery() {
  // hiển thị hình ảnh cuối không hiện button >
  currentIndex == images.length - 1
    ? next.classList.add("hide")
    : next.classList.remove("hide");
  // hiển thị hình ảnh đầu tiên không hiện button <
  currentIndex == 0
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");
  // hiển thị gallery
  gallery.classList.add("show");
  // gáng src từ ảnh trong container sang gallery
  galleryImg.src = images[currentIndex].src;
}
// đóng gallery lại
close.addEventListener("click", () => {
  gallery.classList.remove("show");
});
// khi click button > chuyển hình tới
next.addEventListener("click", () => {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  showGallery();
});
// khi click button > chuyển hình lùi
prev.addEventListener("click", () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
});
// sự kiện bàn phím Esc để đóng gallery
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) gallery.classList.remove("show");
});
