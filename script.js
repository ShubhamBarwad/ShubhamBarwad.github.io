// Slider Effect
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
    },
  });

  // Send Email
  function sendEmail(){
    Email.send({
      SecureToken: "cbcdbf9e-c48b-4344-96c1-f0a3b5a053ba",
      To : 'sbarwad20595@gmail.com',
      From : "sbarwad20595@gmail.com",
      Subject : document.getElementById('subject').value,
      Body : "Name: "+ document.getElementById('name').value
            +"<br> Email:" + document.getElementById('email').value
            +"<br> Message:" + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
  }

  // B944648C754B4F4064537CCDDA9C9019C26CA4E6BC3870130C130A4169B7F92C7D19A15DE2CDF7F92EF72A8FA2088E6C