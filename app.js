const BtnUp = document.getElementById('BtnUp')
const BtnDown = document.getElementById('BtnDown')
const PageWrapper = document.getElementById('PageWrapper')
let ind = 1
BtnUp.addEventListener('click', ()=>{
    PageWrapper.style.transform = `translate3d(0px, -${ind*(100)}%, 0px)`
    ind = ind+1
    console.log(ind)
})
BtnDown.addEventListener('click', ()=>{
    ind = ind-1
    PageWrapper.style.transform = `translate3d(0px, -${ind*(100)}%, 0px)`
    console.log(ind)
})
