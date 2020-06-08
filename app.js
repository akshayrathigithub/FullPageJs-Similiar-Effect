const BtnUp = document.getElementById('Up')
const BtnDown = document.getElementById('Down')
const BtnLeft = document.getElementById('Left')
const BtnRight = document.getElementById('Right')
const P_3Child = document.getElementById('P-3-ChildWrapper')
const PageWrapper = document.getElementById('PageWrapper')
let ind_V = 0
let ind_H = 0

BtnUp.addEventListener('click', ()=>{
    if(ind_V === 0 || ind_V > 6){
        ind_V = 5
    }else{
        ind_V = ind_V-1
    }
    PageWrapper.style.transform = `translate3d(0px, -${ind_V*(100)}%, 0px)`
    console.log(ind_V)
})
BtnDown.addEventListener('click', ()=>{
    if(ind_V === 5){
        ind_V = 0
    }else{
        ind_V = ind_V+1
    }
    PageWrapper.style.transform = `translate3d(0px, -${ind_V*(100)}%, 0px)`
    console.log(ind_V)
})

BtnLeft.addEventListener('click', ()=>{
    if(ind_H === 0 || ind_H > 3){
        ind_H = 3
    }else{
        ind_H = ind_H-1
    }
    P_3Child.style.transform = `translate3d(-${ind_H*(25)}%, 0px, 0px)`
    console.log(ind_H)
})
BtnRight.addEventListener('click', ()=>{
    if(ind_H === 3){
        ind_H = 0
    }else{
        ind_H = ind_H+1
    }
    P_3Child.style.transform = `translate3d(-${ind_H*(25)}%, 0px, 0px)`
    console.log(ind_H)
})