window.addEventListener('load',() => {
  const showBtn = document.querySelector('#header .show-btn')
  const hiddenDiv = document.querySelector('.trending-hidden-div')
  let isShow = false
  let divClose = null
  let notEnter = null
  let divRemove = null

  const show = () => {
    if(!isShow){
      hiddenDiv.style.border = '2px solid #32cd32'
      clearTimeout(divRemove)
      hiddenDiv.classList.add('show')
      isShow = true
      notEnter = setTimeout(close,7500)
    }
  }

  const close = () => {
    if(isShow){
      hiddenDiv.classList.remove('show')
      isShow = false
      divRemove = setTimeout(() => {
      hiddenDiv.style.border = 'none'
      },250)
    }
  }

  showBtn.addEventListener('click',() => {
    if(!isShow){
      show()
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