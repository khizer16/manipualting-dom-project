

const addp = document.getElementById("p-button")
const addimg = document.getElementById("img-button")
const pdiv = document.getElementById("p-div")
const imgdiv = document.getElementById("img-div")


addp.onclick = function(){
    imgdiv.style.display = 'none'
    pdiv.style.display = 'block'
    const p = document.createElement('p')
    p.textContent= "Hello, how are you doing today?"
    pdiv.appendChild(p)
    pdiv.style.border = "3px solid red"
    
}

addimg.onclick = function(){
    pdiv.style.display = 'none'
    imgdiv.style.display = 'block'
    imgdiv.style.border= "3px solid blue"
    const img = document.createElement("img")
    img.src = 'images (1).jpg'
    img.style.width = '150px'
    imgdiv.appendChild(img)
   
}



