'use strict';

(function() {

  if (!('FormData' in window)) {
    return;
  }

  var forms = document.querySelectorAll('._js-form');

  function request(data, fn) {
    var xhr = new XMLHttpRequest();

    xhr.open('post', '/send?' + (new Date()).getTime());

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
        fn(xhr.status, xhr.responseText);
      }
    });

    xhr.send(data);
  }

  for (var i = 0; i < forms.length; i++) {

    forms[i].addEventListener('submit', function(evt) {
      evt.preventDefault();

      var form = evt.target;
      var data = new FormData(form);

      request(data, function(status, responseText) {
        if (form.parentNode.classList.contains('modal')) {
          form.parentNode.classList.add('modal--closed');
          if (status === 200) {
            console.log(document.querySelector('.modal--thank'));
            document.querySelector('.modal--thank').classList.remove('modal--closed');
          } else {
            document.querySelector('.modal--error').classList.remove('modal--closed');
            document.querySelector('.modal--error h3').innerHTML = 'Ошибка' + '  ' + status;
            document.querySelector('.modal--error span').innerHTML = responseText;
          }
        } else {
          if (status === 200) {
            form.parentNode.classList.add('callback--fine');
          } else {
            form.parentNode.classList.add('callback--fail');
            form.parentNode.querySelector('.callback__failed span').innerHTML = status + '<br>' + responseText;
          }
        }
      });
    });
  }

})();

'use strict';

(function() {

  var modalOverlay = document.querySelector('.modal--overlay');
  var btnModalAsk = document.querySelectorAll('._js-ask-call');
  var btnModalEstim = document.querySelectorAll('._js-estim-deal');
  var modalAsk = document.querySelector('.modal--ask-call');
  var modalEstim = document.querySelector('.estim-deal');
  var closeBtn = document.querySelectorAll('._js-modal-close');

  function openModal(element) {
    modalOverlay.classList.remove('modal--closed');
    element.classList.remove('modal--closed');
  }

  function closeModal(element) {
    modalOverlay.classList.add('modal--closed');
    element.parentNode.classList.add('modal--closed');
  }

  for (var i = 0; i < btnModalAsk.length; i++) {
    btnModalAsk[i].onclick = function(evt) {
      evt.preventDefault();
      openModal(modalAsk);
    };
  }

  for (var l = 0; l < btnModalEstim.length; l++) {
    btnModalEstim[l].onclick = function(evt) {
      evt.preventDefault();
      openModal(modalEstim);
    };
  }

  for (var k = 0; k < closeBtn.length; k++) {
    closeBtn[k].onclick = function(evt) {
      evt.preventDefault();
      var clickedElement = evt.target;
      closeModal(clickedElement);
    };
  }


})();

'use strict';
(function() {

  var closeBtn = document.querySelectorAll('._js-small-form-btn');

  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function(evt) {
      evt.preventDefault();

      evt.target.parentNode.parentNode.classList.remove('callback--fail');
      evt.target.parentNode.parentNode.classList.remove('callback--fine');
    };
  }

})();

'use strict';
(function() {

  var tab = document.querySelector('.tab');
  var activeTab = 'tab-other';

  var tabsList = tab.querySelectorAll('.tabs__button');
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
    tab.querySelector('#' + activeTab).classList.remove('tabs__button--active');
    tab.querySelector('#' + id).classList.add('tabs__button--active');
    activeTab = id;
    switchTab(activeTab);
  }

  function switchTab(tabToShow) {
    tab.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
    tab.querySelector('[data-id=' + tabToShow + ']').classList.add('tabs__item--active');
  }

})();
