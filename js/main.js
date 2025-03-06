import  {menu , menuBtns  } from "./Menu/menu.js";

import  {slider , coverText , threeTiks , watchDiscountBtn} from "./swiper/swiper.js";

import {popularTitle , swichBtn , filmSeries ,imageBackgroung} from "./PopularFilimo/popular.js"

import {watchWithAllDevices, titleDesc , devices , btnDevice} from "./allDevices/allDevices.js";

import  {titleDescTv , modelTv , btnTv , imgTv} from "./howWithTv/howWithTv.js";

import  {imgKartoon , textKartoon , btnKartoon } from "./kartoon/kartoon.js";

import  {titleFree , imgSwiper} from "./MohtavayeRaygan/mohtavayeRaygan.js";

import  {cinamaDesc , cinamaTitle , film} from "./cinama/cinama.js";

import  {titleKarbar , nazar} from "./nazarKarbaran/nazarKarbar.js";

import  footer from "./Footer/footer.js";

import  {titleAccar , paras} from "./soalatMotedavel/soalat.js";







async function allData (){
    await swiper()
    await coverText()
    await threeTiks()
    await watchDiscountBtn()
    await popularTitle()
    await swichBtn()
    await filmSeries()
    await imageBackgroung()
    await watchWithAllDevices()
    await titleDesc()
    await devices()
    await btnDevice()
    await titleDescTv()
    await modelTv()
    await btnTv()
    await imgTv()
    await titleFree()
    await imgKartoon()
    await textKartoon()
    await btnKartoon()
    await secSwiper()
    await cinamaDesc()
    await cinamaTitle()
    await film()
    await nazar()
    await titleKarbar()
    await thirdSwiper()
    await titleAccar()
    await paras()
    await footer()
}
allData()


async function swiper (){
    await menu();
    await menuBtns();
    await slider();
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}





async function secSwiper(){
  await imgSwiper()
  var secSwiper = new Swiper(".secSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
}




async function thirdSwiper(){
  var  thirdSwiper = new Swiper('.thirdSwiper', {
    slidesPerView: 3.5,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        thirdSwiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
}