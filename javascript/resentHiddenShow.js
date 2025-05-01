window.addEventListener('load', () => {
  const searchBox = document.querySelector('#header .text-input')
  const hiddenDiv = document.querySelector('#header .category-hidden-div')
  const resentDiv = document.querySelector('#header .resent-hidden-div')
  const cancelBtn = document.querySelector('#header .resent-hidden-div .footer-hidden a')
  let isShow = false

  const showResent = () => {
    if(!isShow){
      resentDiv.style.display = 'flex'
      isShow = true
      hiddenDiv.classList.add('none')
    }
  }

  const closeResent = () => {
    if(isShow){
      resentDiv.style.display = 'none'
      isShow = false
      hiddenDiv.classList.remove('none')
      hiddenDiv.classList.remove('show')
    }
  }

  searchBox.addEventListener('click',() => {
    showResent()
  })

  cancelBtn.addEventListener('click',() => {
    closeResent()
  })

  document.addEventListener('click',(e) => {
    if(!(searchBox.contains(e.target) || resentDiv.contains(e.target))){
      closeResent()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResent();
    }
  });
})