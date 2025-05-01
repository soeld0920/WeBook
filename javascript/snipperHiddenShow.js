import { resentClose, resentShow, searchBox, snipperClose, snipperDiv, snipperIsShown, snipperShow } from "./showModule.js"

window.addEventListener('load', () => {
  const cancelBtn = document.querySelector('.snipper-hidden-div .footer-hidden a')

  searchBox.addEventListener('input',(e) => {
    if(e.target.value.trim() === ''){
      snipperClose()
      resentShow()
    }else{
      resentClose()
      snipperShow()
    }
  })

  cancelBtn.addEventListener('click',() => {
    snipperClose()
  })

  document.addEventListener('click',(e) => {
    if(snipperIsShown()&& !(searchBox.contains(e.target) || snipperDiv.contains(e.target))){
      snipperClose()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      snipperClose();
    }
  });
})