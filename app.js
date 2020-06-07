const BtnUp = document.getElementById('Up')
const BtnDown = document.getElementById('Down')
const PageWrapper = document.getElementById('PageWrapper')
let ind = 0
BtnUp.addEventListener('click', ()=>{
    if(ind === 0 || ind > 6){
        ind = 5
    }else{
        ind = ind-1
    }
    PageWrapper.style.transform = `translate3d(0px, -${ind*(100)}%, 0px)`
    console.log(ind)
})
BtnDown.addEventListener('click', ()=>{
    if(ind === 5){
        ind = 0
    }else{
        ind = ind+1
    }
    PageWrapper.style.transform = `translate3d(0px, -${ind*(100)}%, 0px)`
    console.log(ind)
})
