window.addEventListener('load',() => {
  const imageList = document.querySelector('#main-img .img-list')
  const counter = document.querySelector('#main-img .counter')
  const slideNumber = document.querySelector('#main-img .slide-number')
  const dotIndicator = document.querySelector('#main-img .dot-indicator')
  const maxImage = 6;
  let nowImage = 1;
  let isMove = false

  const showImage = (bool = false, number = nowImage) => {
    isMove = true
    imageList.style.transform  = `translateX(${-nowImage * 100}vw)`
    nowImage = number
    if(bool){
      const callback = setTimeout(() => 
        {
          imageList.style.transition = 'none'
          imageList.style.transform  = `translateX(${-nowImage * 100}vw)`
          const backImage2 = setTimeout(() => {
            imageList.style.transition = 'all 0.5s'},50)
        },500)
    }
    for(let i = 0; i < maxImage; i++){
      if(nowImage -1 == i){
        counter.children[0].children[i].classList.add('dot-now')
      }else{
        counter.children[0].children[i].classList.remove('dot-now')
      }
    }
    slideNumber.textContent = `${nowImage}/6`

    clearInterval(autoMove)
    autoMove = window.setInterval(nextImage,3500);

    const moveOk = setTimeout(() => isMove = false,800)
  }

  

  const nextImage = () => {
    if(!isMove){  
      nowImage++
      if(nowImage > maxImage){
        showImage(true,1)
      }else{
        showImage()
      }
    }
  }

  const prepImage = () => {
    if(!isMove){
      nowImage--
      if(nowImage <= 0){
        showImage(true,maxImage)
      }else{
        showImage()
      }
    }
  }

  let autoMove = window.setInterval(nextImage,3500);
  const prepBtn = document.querySelector('#main-img .prep-btn')
  const nextBtn = document.querySelector('#main-img .next-btn')
  prepBtn.addEventListener('click',prepImage)
  nextBtn.addEventListener('click',nextImage)

  for(let i = 0; i < dotIndicator.children.length; i++){
    dotIndicator.children[i].addEventListener('click',() => {
      const index = i + 1
      nowImage = index;
      showImage()
    })
  }
})