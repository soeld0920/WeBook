window.addEventListener('load',() => {
  const showLi = document.querySelector('#header .main-nav .first-li')
  const hiddenDiv = document.querySelector('.field-hidden-div')
  const hiddenDivHead = document.querySelector('.field-hidden-div .head')
  const bufferHead = document.querySelector('.buffer-head')
  const bufferBody = document.querySelector('.buffer-body')
  let isShowHead = false
  let headRemove = null
  const hiddenDivBody = document.querySelector('.field-hidden-div .body')
  let isShowBody = false
  let bodyRemove = null
  let closeTimer = null

  const showHead = () => {
    if(!isShowHead){
      hiddenDivHead.style.border = '3px solid rgba(139,69,19,0.75)'
      clearTimeout(headRemove)
      clearTimeout(closeTimer)
      hiddenDivHead.classList.add('show')
      isShowHead = true
      hiddenDiv.style.display = 'flex'
    }
  }

  const closeHead = () => {
    if(isShowHead){
      hiddenDivHead.classList.remove('show')
      isShowHead = false
      headRemove = setTimeout(() => {
        hiddenDivHead.style.border = 'none'
        hiddenDiv.style.display = 'none'
      },450)
    }
  }
  

  const showBody = () => {
    if(!isShowBody){
      hiddenDivBody.style.borderRight = '3px solid rgba(139,69,19,0.75)'
      hiddenDivBody.style.borderBottom = '3px solid rgba(139,69,19,0.75)'
      clearTimeout(bodyRemove)
      clearTimeout(closeTimer)
      hiddenDivBody.classList.add('show')
      isShowBody = true
    }
  }

  const closeBody = () => {
    if(isShowBody){
      hiddenDivBody.classList.remove('show')
      isShowBody = false
      bodyRemove = setTimeout(() => {
        hiddenDivBody.style.borderRight = 'none'
        hiddenDivBody.style.borderBottom = 'none'
      },450)
    }
  }

  showLi.addEventListener('mouseenter',() => {
    showHead()
  })
  let doClose = false
  document.addEventListener('mousemove', (e) => {
    if (!showLi.contains(e.target) &&
    !hiddenDivHead.contains(e.target) &&
    !bufferHead.contains(e.target) &&
    !hiddenDivBody.contains(e.target) &&
    !bufferBody.contains(e.target) &&
    isShowHead && 
    !doClose) {
      doClose = true
      if(isShowBody){
        closeBody();
        closeTimer = setTimeout(() => {
          closeHead()
          doClose = false
        },810);
      }else{
        closeHead()
        doClose = false
    }
    }
  });

  
  const ul = hiddenDivHead.children

  for(let i = 0; i < ul.length; i++){
    ul[i].addEventListener('click',() => {
      // const index = i;
      showBody()
    })
  }
})