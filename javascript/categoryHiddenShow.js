window.addEventListener('load',() => {
  const showBtn = document.querySelector('#header .category .btn')
  const hiddenDiv = document.querySelector('#header .category-hidden-div')
  let isShow = false
  let divClose = null
  let notEnter = null

  const cateClose = () => {
    if(isShow){
      hiddenDiv.classList.remove('show')
      isShow = false
    }
  }

  showBtn.addEventListener('click',() => {
    let islock = hiddenDiv.classList.contains('none')
    if(!islock){
      if(!isShow){
        hiddenDiv.classList.add('show')
        isShow = true
        notEnter = setTimeout(close,7500)
      }else{
        cateClose()
        clearTimeout(divClose)
        clearTimeout(notEnter)
      }
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cateClose();
    }
  });
})