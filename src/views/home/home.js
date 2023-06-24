// import a from './a';
import './home.css';

var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    speed: 800,
    
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
    },
    autoplay: {
      delay: 5000, // 延迟时间（单位为毫秒）
      disableOnInteraction: false, // 用户操作后是否停止自动轮播
    },
    
  })    
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // 同时显示的轮播内容个数
    spaceBetween: 10,
    
   
    navigation: {
      nextEl: '.swiper-button-next', // 下一张按钮的类名或选择器
      prevEl: '.swiper-button-prev', // 上一张按钮的类名或选择器
    },
    on: {
      init: function () {
        checkButtonVisibility(this);
      },
      slideChange: function () {
        checkButtonVisibility(this);
      },
    }
    
  });
  function checkButtonVisibility(swiper) {
    var prevButton = document.querySelector(".hall .swiper-button-prev");
    var nextButton = document.querySelector(".hall .swiper-button-next");

    // 如果当前是第一张轮播图，则隐藏左边按钮
    if (swiper.isBeginning) {
      prevButton.classList.add("swiper-button-disabled");
    } else {
      prevButton.classList.remove("swiper-button-disabled");
    }

    // 如果当前是最后一张轮播图，则隐藏右边按钮
    if (swiper.isEnd) {
      nextButton.classList.add("swiper-button-disabled");
    } else {
      nextButton.classList.remove("swiper-button-disabled");
    }
  }
