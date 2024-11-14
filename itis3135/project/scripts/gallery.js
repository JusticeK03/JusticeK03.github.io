document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  let slideIndex = 1;

  function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("my-slides");
      const dots = document.getElementsByClassName("demo");
      const captionText = document.getElementById("caption");

      if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  function openModal() {
      console.log("openModal function is called");
      document.getElementById("my-modal").style.display = "block";
      showSlides(slideIndex); // This now calls showSlides after it's defined
  }

  function closeModal() {
      document.getElementById("my-modal").style.display = "none";
  }

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  // Event Listeners for Modal and Slide Controls
  document.getElementById("img1").addEventListener("click", () => { 
    openModal(); 
    currentSlide(1); 
});
document.getElementById("img2").addEventListener("click", () => { 
    openModal(); 
    currentSlide(2); 
});
  document.getElementById("close-modal-btn").addEventListener("click", closeModal);
  document.getElementById("prev-slide").addEventListener("click", () => plusSlides(-1));
  document.getElementById("next-slide").addEventListener("click", () => plusSlides(1));

  // Event Listeners for Thumbnail Images
  document.getElementById("thumb1").addEventListener("click", () => currentSlide(1));
  document.getElementById("thumb2").addEventListener("click", () => currentSlide(2));
});
