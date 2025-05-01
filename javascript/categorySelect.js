window.addEventListener('load',() => {
  const text = document.querySelector('#header .search span')
  const hiddenDiv = document.querySelector('#header .category-hidden-div')
  const hiddenli = hiddenDiv.children[0].children

  for(let i = 0; i < hiddenli.length; i++){
    hiddenli[i].addEventListener('click', () => {
      const index = i
      text.textContent = hiddenli[index].textContent
      for(let i = 0; i < hiddenli.length; i++){
        if(index === i){
          hiddenli[i].classList.add('select')
        }else{
          hiddenli[i].classList.remove('select')
        }
      }
    })
  }
})