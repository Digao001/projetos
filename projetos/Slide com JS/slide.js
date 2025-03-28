img1 = document.querySelector('#img1')
img2 = document.querySelector('#img2')
img3 = document.querySelector('#img3')

img1.addEventListener('click', ()=> {
    img1.style.display = 'none'
    img2.style.display = 'block'
})

img2.addEventListener('click', ()=> {
    img2.style.display = 'none'
    img3.style.display = 'block'

})

img3.addEventListener('click', ()=> {
    img3.style.display = 'none'
    img1.style.display = 'block'

})

