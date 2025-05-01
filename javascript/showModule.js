export const categoryDiv = document.querySelector('#header .category-hidden-div')
export const resentDiv = document.querySelector('#header .resent-hidden-div')
export const snipperDiv = document.querySelector('#header .snipper-hidden-div')

class Hidden{
  constructor(div){
    this.div = div
  }

  show(){
    const isShow = this.div.classList.contains('show')
    const isLock = this.div.classList.contains('lock')
    if(!isShow && !isLock){
      this.div.classList.add('show')
    }
  }
  
  close(){
    const isShow = this.div.classList.contains('show')
    if(isShow){
      this.div.classList.remove('show')
    }
  }
  
  lock(){
    const isLock = this.div.classList.contains('lock')
    if(!isLock){
      this.div.classList.add('lock')
    }
  }
  
  unlock(){
    const isLock = this.div.classList.contains('lock')
    if(isLock){
      this.div.classList.remove('lock')
    }
  }

}

const category = new Hidden(categoryDiv)
const resent = new Hidden(resentDiv)
const snipper = new Hidden(snipperDiv)

export function categoryShow(){
  category.show()
}

export function categoryClose(){
  category.close()
}

export function categoryIsShown(){
  return category.classList.contains('show')
}

export function resentShow(){
  resent.show()
  category.lock()
  snipper.lock()
}

export function resentClose(){
  resent.close()
  category.unlock()
  snipper.unlock()
}

export function resentIsShown(){
  return resent.classList.contains('show')
}

export function snipperShow(){
  snipper.show()
  category.lock()
  resent.lock()
}

export function snipperClose(){
  snipper.close()
  category.unlock()
  resent.unlock()
}

export function snipperIsShown(){
  return snipper.classList.contains('show')
}