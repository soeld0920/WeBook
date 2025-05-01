export const searchBox = document.querySelector('#header .text-input')
export const categoryDiv = document.querySelector('.category-hidden-div')
export const resentDiv = document.querySelector('.resent-hidden-div')
export const snipperDiv = document.querySelector('.snipper-hidden-div')

class Hidden{
  constructor(div){
    this.div = div
  }

  show(){
    const isShow = this.div.classList.contains('show')
    const isLock = this.div.classList.contains('lock')
    if(!isShow && !isLock){
      this.div.classList.add('show')
      this.isshow = true
    }
  }
  
  close(){
    const isShow = this.div.classList.contains('show')
    if(isShow){
      this.div.classList.remove('show')
      this.isshow = false
    }
  }
  
  lock(){
    const isLock = this.div.classList.contains('lock')
    if(!isLock){
      this.div.classList.add('lock')
      this.islock = true
    }
  }
  
  unlock(){
    const isLock = this.div.classList.contains('lock')
    if(isLock){
      this.div.classList.remove('lock')
      this.islock = false
    }
  }

}

const category = new Hidden(categoryDiv)
const resent = new Hidden(resentDiv)
const snipper = new Hidden(snipperDiv)

export function categoryShow(){
  if(!category.islock){
    category.show()
    resent.close()
    snipper.close()
  }
}

export function categoryClose(){
  category.close()
}

export function categoryIsShown(){
  return categoryDiv.classList.contains('show')
}

export function resentShow(){
  if(!resent.islock){
    resent.show()
    category.lock()
    snipper.lock()
    category.close()
    snipper.close()
  } 
}

export function resentClose(){
  if(resent.isshow){
    resent.close()
    category.unlock()
    snipper.unlock()
  }
}

export function resentIsShown(){
  return resentDiv.classList.contains('show')
}

export function snipperShow(){
  if(!snipper.islock){
    snipper.show()
    category.lock()
    resent.lock()
    category.close()
    resent.close()
  }
}

export function snipperClose(){
  if(snipper.isshow){
    snipper.close()
    category.unlock()
    resent.unlock()
  }
}

export function snipperIsShown(){
  return snipperDiv.classList.contains('show')
}