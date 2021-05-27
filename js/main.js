window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelectorAll('.btn-close');
  const modal = document.querySelector('.modal');
  const selectedColor = document.getElementById('selected-color');

  const mainImageBody = document.querySelector('.card__picture-body');
  const mainImageWheels = document.querySelector('.card__picture-wheel');

  const tabs = document.querySelectorAll('.tab__title-item');
  const tabSelectList = document.querySelectorAll('.tab__select-list');

  const paintingBody = document.querySelectorAll('.tab__select--body .tab__select-item');
  const paintingWheels = document.querySelectorAll('.tab__select--wheels .tab__select-item');

  const colorOfBodyPainting = document.querySelectorAll('.tab__select--body .tab__select-item');
  const colorOfWheelsPainting = document.querySelectorAll('.tab__select--wheels .tab__select-item');

  const playButton = document.querySelector('.sound__button');

  var music = new Audio();

  function playAudio(file) {
    music.pause();
    music = new Audio(file);
    music.play();
  }

  playButton.addEventListener('click', (e) => {
    const getStartButton = document.querySelector('.sound__button .btn-start');
    const getStopButton = document.querySelector('.sound__button .btn-stop');

    var toggleButtonTimeout = setTimeout(() => {
      getStartButton.classList.remove('disable');
      getStopButton.classList.add('disable');
    }, 16000);

    if (getStopButton.classList.contains('disable')) {
      getStartButton.classList.add('disable');
      getStopButton.classList.remove('disable');
      playAudio('./assets/sounds/carsounddemo.aac');
    } else {
      toggleButtonTimeout;
      getStartButton.classList.remove('disable');
      getStopButton.classList.add('disable');
      music.pause();
    }
  });

  btnOpen.addEventListener('click', () => {
    modal.classList.add('modal--active');
  });

  btnClose.forEach((el) =>
    el.addEventListener('click', () => {
      modal.classList.remove('modal--active');
    }),
  );

  const removeActiveClass = (obj) => {
    obj.forEach((item) => item.classList.remove('active'));
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const selectedId = e.currentTarget.id;

      removeActiveClass(tabs);
      removeActiveClass(tabSelectList);

      tabSelectList[selectedId].classList.add('active');
      e.currentTarget.classList.add('active');
      console.log('tab ', tab, selectedId, tabSelectList[selectedId]);
    });
  });

  paintingBody.forEach((el) =>
    el.addEventListener('click', (e) => {
      const color = e.currentTarget.id;

      removeActiveClass(colorOfBodyPainting);
      e.currentTarget.classList.add('active');

      mainImageBody.setAttribute('src', `./assets/images/nadwozia/${color}.png`);
      selectedColor.textContent = color;
    }),
  );

  paintingWheels.forEach((el) =>
    el.addEventListener('click', (e) => {
      const type = e.currentTarget.id;
      console.log('eee ', type);

      removeActiveClass(colorOfWheelsPainting);
      e.currentTarget.classList.add('active');

      mainImageWheels.setAttribute('src', `./assets/images/felgi/${type}.png`);
    }),
  );
});
