//Example found at: https://www.geeksforgeeks.org/how-to-change-background-color-of-a-div-on-mouse-move-over-using-javascript/

let originalColor = '#f8f8ff'
var selectedColor = 'blue'

var color = [, "#3C9EE7", "#E7993C", "#313337", "#FFFF66",  
        "#E73C99", "#3CE746", "#E7993C", "#ff0000", "#9933ff"]

const painting = document.querySelector('.painting')

painting.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = selectedColor
} )

painting.addEventListener('dblclick', function(e) { 
    e.target.style.backgroundColor = originalColor
    selectedColor = e.target.style.backgroundColor
} )

painting.addEventListener('click', function (e) {
    e.target.style.backgroundColor = color[Math.floor(Math.random() * color.length)]
    selectedColor = e.target.style.backgroundColor
} )

document.body.append(painting)
