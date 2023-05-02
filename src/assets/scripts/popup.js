function openPopup(popupClassName = '', popupBGName = '') {
  if (popupClassName === '' || popupBGName === '') {
    console.error("Не указано чета")
  }

  document.querySelector(`.${popupClassName}`).classList.add('active')
  document.querySelector(`.${popupBGName}`).classList.add('active')
}

function closePopup(popupClassName = '', popupBGName = '') {
  if (popupClassName === '' || popupBGName === '') {
    console.error("Не указано чета")
  }

  document.querySelector(`.${popupClassName}`).classList.remove('active')
  document.querySelector(`.${popupBGName}`).classList.remove('active')
}


