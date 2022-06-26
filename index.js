const photos = document.querySelectorAll(".photo");
photos.forEach((element) => {
  element.addEventListener("mouseover", () => {
    photos.forEach((element) => {
      element.classList.remove("photo-active");
    });
    element.classList.add("photo-active");
  });
});
