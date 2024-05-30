// Open Sign Up Modal//
document.getElementById('button').addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

//Close Sign Up Modal//
document.querySelector('.close').addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display = 'none';
})

//Open Log In Modal//
document.getElementById('button1').addEventListener('click',function() {
    document.querySelector('.bg-modal1').style.display = 'flex';
});

//Close Log In Modal//
document.querySelector('.close1').addEventListener('click',function() {
    document.querySelector('.bg-modal1').style.display = 'none';
})

//Slide Show//
const productContainers=[...document.querySelectorAll('.product-container')];
const nxtBtn=[...document.querySelectorAll('.nex-btn')];
const preBtn=[...document.querySelectorAll('.prev-btn')];

productContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })

})

