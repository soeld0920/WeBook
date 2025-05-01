window.addEventListener('load',() => {
  const trendUl = document.querySelector('#header .trending');
  let nowIndex = 0;
  let isStop = false

  const moveUp = () => {
    nowIndex++
    trendUl.style.transform = `translateY(${nowIndex * -30}px)`
    if(nowIndex >= 10){
      const callback = setTimeout(() => 
        {
          trendUl.style.transition = 'none'
          trendUl.style.transform  = 'translateY(0px)'
          const backImage2 = setTimeout(() => {
            trendUl.style.transition = 'all 0.5s'},50)
        },500)
        nowIndex = 0
    }
  }

  let autoMove = setInterval(moveUp,2500);

  trendUl.addEventListener('mouseover',() => {
    if(!isStop){ 
      clearInterval(autoMove)
      isStop = true
    }
    console.log('a')
  })

  trendUl.addEventListener('mouseout',() => {
    if(isStop) {
      autoMove = setInterval(moveUp,2500);
      isStop = false
    }
    console.log('b')
  })

})
