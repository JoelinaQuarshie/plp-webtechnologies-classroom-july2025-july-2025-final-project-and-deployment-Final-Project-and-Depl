// Image Slider (simple loop)
let images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;

function changeSlide() {
  const img = document.getElementById("slider-image");
  index = (index + 1) % images.length;
  img.src = images[index];
}

setInterval(changeSlide, 3000);

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields.");
    }
  });
});
