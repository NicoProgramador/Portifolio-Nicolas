const chk = document.getElementById('chk')
const myImage1 = document.getElementById('myImage1')
const myImage2 = document.getElementById('myImage2')
const myImage3 = document.getElementById('myImage3')
const myImage4 = document.getElementById('myImage4')
const myLine1 = document.getElementById('myLine1')
const myLine2 = document.getElementById('myLine2')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    if (chk.checked) {
        myImage1.src = 'images/LinkedinLigth.svg'
        myImage2.src = 'images/gitHubLigth.svg'
        myImage3.src = 'images/PersonLinesFillLigth.svg'
        myImage4.src = 'images/javaLigth.svg'
        myLine1.style.border = '1px solid #fff'
        myLine2.style.border = '1px solid #fff'
    } else {
        myImage1.src = 'images/Linkedin.svg'
        myImage2.src = 'images/gitHub.svg'
        myImage3.src = 'images/PersonLinesFill.svg'
        myImage4.src = 'images/java.svg'
        myLine1.style.border = '1px solid #000'
        myLine2.style.border = '1px solid #000'
    }
})