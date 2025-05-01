window.addEventListener('load',() => {
  const showBtn = document.querySelector('#header .show-btn')
  const hiddenDiv = document.querySelector('#header .trending-hidden-div')
  let isShow = false
  let divClose = null
  let notEnter = null

  const close = () => {
    if(isShow){
      hiddenDiv.classList.remove('show')
      isShow = false
    }
  }

  showBtn.addEventListener('click',() => {
    if(!isShow){
      hiddenDiv.classList.add('show')
      isShow = true
      notEnter = setTimeout(close,7500)
    }else{
      close()
      clearTimeout(divClose)
      clearTimeout(notEnter)
    }
  })

  hiddenDiv.addEventListener('mouseleave',() => {
    if(isShow){
      clearTimeout(divClose)
      divClose = setTimeout(close,3000)
    }
  })

  hiddenDiv.addEventListener('mouseenter', () => {
    clearTimeout(notEnter);
    clearTimeout(divClose);
  });
})