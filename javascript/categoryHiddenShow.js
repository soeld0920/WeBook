import "./showModule.js"

window.addEventListener('load',() => {
  const showBtn = document.querySelector('#header .category .btn')
  let divClose = null
  let notEnter = null

  showBtn.addEventListener('click',() => {
    if(categoryIsShown()){
      categoryShow()
      notEnter = setTimeout(categoryClose,7500)
    }else{
      categoryClose()
      clearTimeout(divClose)
      clearTimeout(notEnter)
    }
    }
  )

  categoryDiv.addEventListener('mouseleave',() => {
    if(categoryIsShown()){
      clearTimeout(divClose)
      divClose = setTimeout(categoryClose,3000)
    }
  })

  categoryDiv.addEventListener('mouseenter', () => {
    clearTimeout(notEnter);
    clearTimeout(divClose);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      categoryClose();
    }
  });
})