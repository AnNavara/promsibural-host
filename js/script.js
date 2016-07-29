'use strict';

(function() {

  var modalOverlay = document.querySelector('.modal--overlay');
  var btnModalAsk = document.querySelectorAll('._js-ask-call');
  var btnModalEstim = document.querySelectorAll('._js-estim-deal');
  var modalAsk = document.querySelector('.modal--ask-call');
  var modalEstim = document.querySelector('.estim-deal');
  var closeBtn = document.querySelectorAll('.modal__close');

  function openModal(element) {
    modalOverlay.classList.remove('modal--closed');
    element.classList.remove('modal--closed');
  }

  function closeModal(element) {
    modalOverlay.classList.add('modal--closed');
    element.parentNode.classList.add('modal--closed')
  }

  for (var i = 0; i < btnModalAsk.length; i++) {
    btnModalAsk[i].onclick = function(evt) {
      evt.preventDefault();
      openModal(modalAsk)
    }
  }

  for (var i = 0; i < btnModalEstim.length; i++) {
    btnModalEstim[i].onclick = function(evt) {
      evt.preventDefault();
      openModal(modalEstim);
    }
  }

  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function(evt) {
      evt.preventDefault();
      var clickedElement = evt.target;
      closeModal(clickedElement);
    }
  }


})();

'use strict';
(function() {

  var slider = document.querySelector('.slider');
  var activeSlide = "slider-1";

  var slideList = slider.querySelectorAll("[name=slider-control]");

  for (var i = 0; i < slideList.length; i++) {
    slideList[i].onclick = function(evt) {
      var clickedElementID = evt.target.id;
      setActiveSlide(clickedElementID);
    };
  }

  function setActiveSlide(id) {
    if (activeSlide === id) {
      return;
    }
    activeSlide = id;
    switchSlide(activeSlide);
  }

  function switchSlide(slideToShow) {
    slider.querySelector('.slider__item--active').classList.remove('slider__item--active');
    slider.querySelector('[data-id=' + slideToShow + ']').classList.add('slider__item--active');
  }

})();

'use strict';
(function() {

  var tabs = document.querySelector('.tabs');
  var activeTab = 'tab-other';

  var tabsList = tabs.querySelectorAll('.tabs__button');
  for (var i = 0; i < tabsList.length; i++) {
    tabsList[i].onclick = function(evt) {
      evt.preventDefault();
      var clickedElementID = evt.target.id;
      setActiveTab(clickedElementID);
    };
  }

  function setActiveTab(id) {
    if (activeTab === id) {
      return;
    }
    tabs.querySelector('#' + activeTab).classList.remove('tabs__button--active');
    tabs.querySelector('#' + id).classList.add('tabs__button--active');
    activeTab = id;
    switchTab(activeTab);
  }

  function switchTab(tabToShow) {
    tabs.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
    tabs.querySelector('[data-id=' + tabToShow + ']').classList.add('tabs__item--active');
  }

})();
