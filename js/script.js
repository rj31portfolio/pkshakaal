
  

  

  AOS.init(2000);

  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      const count = +counter.innerText.replace(/\D/g, '');

      const increment = target / 200;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}${suffix}`;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = `${target}${suffix}`;
      }
    };

    updateCount();
  });

  // testimonial code start

  $('.people').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.peoples').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    // testimonial code start



  // function changeImage(thumbnail) {
  //   const mainImage = document.getElementById('main-image');
  //   mainImage.src = thumbnail.src;
  // }
  
  // function addToCart() {
  //   const qty = document.getElementById('quantity').value;
  //   const message = document.getElementById('cart-message');
  //   if (qty > 0) {
  //     message.textContent = `✅ Added ${qty} item(s) to cart!`;
  //   } else {
  //     message.textContent = 'Please select a valid quantity.';
  //     message.style.color = 'red';
  //   }
  // }
  

 
//   nav start
// $(window).ready(function () {
// $(document).scroll(function () {
//   y = $(window).scrollTop();

//   if (y >= 0 && y <= 772) {
//     $("#header").css("boxShadow", "1px 1px 1px black");
//   }

//   if (y == 0) {
//     $("#header").css("backgroundColor", "pink");
//     $("#header").css("boxShadow", "none");
//   }

//   console.log(y);
// });
// });




  



let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function manualSlide(index) {
  showSlide(index);
  clearInterval(autoSlide); // stop auto rotation when manually clicked
  autoSlide = setInterval(nextSlide, 3000); // restart auto rotation
}

let autoSlide = setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});


const images = document.querySelectorAll('.gallery-img');
  const viewer = document.getElementById('fullscreenViewer');
  const fullImg = document.getElementById('fullscreenImage');
  const closeBtn = document.getElementById('closeBtn');
  const galleryContainer = document.getElementById('galleryContainer');

  images.forEach(img => {
    img.addEventListener('click', () => {
      fullImg.src = img.src;
      viewer.style.display = 'flex';
      galleryContainer.style.display = 'none'; // Hide gallery
    });
  });

  closeBtn.addEventListener('click', () => {
    viewer.style.display = 'none';
    galleryContainer.style.display = 'block'; // Show gallery again
  });
  
