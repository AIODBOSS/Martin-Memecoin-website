
// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
if (menuBtn && nav){
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

// Copy CA
const copyBtn = document.getElementById('copyCA');
if (copyBtn){
  copyBtn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText('0xb015701C17830AA4a4c96F7BC1A57c3A5eDd7C86');
      copyBtn.textContent = 'Copied!';
      setTimeout(()=> copyBtn.textContent = 'Copy', 1500);
    }catch(e){
      alert('Copy failed, tap & hold to copy.');
    }
  });
}

// Generic slideshow (fades every N ms; N from data-interval, default 2000)
function setupSlideshow(root){
  const interval = parseInt(root.dataset.interval || '2000', 10);
  const slides = Array.from(root.children);
  let i = 0;
  function show(idx){
    slides.forEach((el, j) => el.classList.toggle('active', j === idx));
  }
  show(0);
  setInterval(()=>{ i = (i + 1) % slides.length; show(i); }, interval);
}

// Banner slideshow, slower toggle
(function bannerSlides(){
  const wrap = document.getElementById('heroSlides');
  const imgs = wrap ? wrap.querySelectorAll('img') : [];
  let i = 0;
  function show(idx){
    imgs.forEach((img, j) => img.classList.toggle('active', j === idx));
  }
  show(0);
  setInterval(()=>{ i = (i + 1) % imgs.length; show(i); }, 3500);
})();

// Initialize collection/community slideshows
['martinCollection','communityGallery'].forEach(id => {
  const root = document.getElementById(id);
  if (root) setupSlideshow(root);
});

// Toggle logic for header socials + chart
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("headerToggle");
  const toggleContent = document.getElementById("toggleContent");

  toggleBtn.addEventListener("click", () => {
    if (toggleContent.style.display === "block") {
      toggleContent.style.display = "none";
    } else {
      toggleContent.style.display = "block";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const slideshow = document.getElementById("communityGallery");
  const slides = slideshow.querySelectorAll("img");
  let index = 0;
  let interval;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
    });
  }

  function startSlideshow() {
    interval = setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 5000); // 5 seconds
  }

  function stopSlideshow() {
    clearInterval(interval);
  }

  // Start initially
  showSlide(index);
  startSlideshow();

  // Pause on hover
  slideshow.addEventListener("mouseenter", stopSlideshow);
  slideshow.addEventListener("mouseleave", startSlideshow);
});
