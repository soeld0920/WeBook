import { resentClose, resentDiv, resentIsShown, resentShow, searchBox, snipperIsShown } from "./showModule.js"

window.addEventListener('load', () => {
  const cancelBtn = document.querySelector('.resent-hidden-div .footer-hidden a')

  searchBox.addEventListener('click',() => {
    console.log('a')
    resentShow()
  })

  cancelBtn.addEventListener('click',() => {
    resentClose()
  })

  document.addEventListener('click',(e) => {
    if(resentIsShown() && !(searchBox.contains(e.target) || resentDiv.contains(e.target))){
      resentClose()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      resentClose();
    }
  });
})