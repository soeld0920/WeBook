window.addEventListener('load', () => {
  const searchBox = document.querySelector('#header .text-input')
  const hiddenDiv = document.querySelector('#header .category-hidden-div')
  const resentDiv = document.querySelector('#header .resent-hidden-div')
  const snipperDiv = document.querySelector('#header .snipper-hidden-div')
  const cancelBtn = document.querySelector('#header .snipper-hidden-div .footer-hidden a')
  let isShow = false

  const showSnipper = () => {
    if(!isShow){
      snipperDiv.classList.add('show')
      isShow = true
      hiddenDiv.classList.add('none')
      resentDiv.classList.add('none')
    }
  }

  const closeSnipper = () => {
    if(isShow){
      snipperDiv.classList.remove('show')
      isShow = false
      hiddenDiv.classList.remove('none')
      hiddenDiv.classList.remove('show')
      resentDiv.classList.remove('none')
      resentDiv.classList.remove('show')
    }
  }

  searchBox.addEventListener('input',(e) => {
    showSnipper()
  })

  cancelBtn.addEventListener('click',() => {
    closeSnipper()
  })

  document.addEventListener('click',(e) => {
    if(!(searchBox.contains(e.target) || resentDiv.contains(e.target))){
      closeSnipper()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSnipper();
    }
  });
})