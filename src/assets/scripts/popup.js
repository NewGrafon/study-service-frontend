function openPopup(popupClassName = '', popupBGClassName = '') {
  if (popupClassName === '' || popupBGClassName === '') {
    console.error("Не указано чета");
  }

  document.querySelector(`.${popupClassName}`).classList.add('active');
  document.querySelector(`.${popupBGClassName}`).classList.add('active');
}

function closePopup(popupClassName = '', popupBGClassName = '') {
  if (popupClassName === '' || popupBGClassName === '') {
    console.error("Не указано чета");
  }

  document.querySelector(`.${popupClassName}`).classList.remove('active');
  document.querySelector(`.${popupBGClassName}`).classList.remove('active');
}


