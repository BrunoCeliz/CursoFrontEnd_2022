//Las funciones que queremos:

document.getElementById("more txt").addEventListener('click',function() {
    document.getElementById("mucho texto").style.display = 'block'
    document.getElementById("less txt").style.display = 'block'
    document.getElementById("more txt").style.display = 'none'
})

document.getElementById("less txt").addEventListener('click',function() {
    document.getElementById("mucho texto").style.display = 'none'
    document.getElementById("less txt").style.display = 'none'
    document.getElementById("more txt").style.display = 'block'
})