 // resp_menu
 const toggler_item = document.querySelector(".toggler_item");
 const resp_menu = document.querySelector(".resp_menu");
 const toggler_menu = document.getElementById('menu');

  resp_menu.addEventListener('click', function(){
    toggler_item.classList.toggle('open');
    toggler_menu.classList.toggle('resp_toggler_menu');
  })
 // scroll_down
  function scrollBottom(x,y){
    window.scrollTo(0, document.body.scrollHeight);
}

// sliders
 var swiper = new Swiper('.car_slider_container', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        breakpoints: {
    // when window width is <= 599px
    599: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 959px
    959: {
      slidesPerView: 2,
    },
    // when window width is <= 1365px
    1365: {
      slidesPerView: 3,
    }
  }
    });
  var swiper = new Swiper('.accesories_slider_container', {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        breakpoints: {
   // when window width is <= 599px
    599: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 959px
    959: {
      slidesPerView: 2,
    },
    // when window width is <= 1365px
    1365: {
      slidesPerView: 3,
    }
  }
    });

  var swiper = new Swiper('.sponsors_slider_container', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
    // when window width is <= 599px
    599: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 719px
    719: {
      slidesPerView: 2,
    },
    // when window width is <= 959px
    959: {
      slidesPerView: 3,
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 4,
    }
    
  }
});

// form

var dropDown = document.getElementById("form_dropdown");
var hidden = document.getElementById("choose_hidden")

dropDown.addEventListener("click", function(){
  dropDown.classList.toggle("dropdown_active");
  hidden.classList.toggle("choose_active");
})


var options = document.getElementsByClassName("select_option");
var sname = document.getElementById("select_name");


for(let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function(){
      sname.textContent = options[i].textContent;
    })
}
