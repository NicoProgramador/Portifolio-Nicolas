const chk = document.getElementById('chk')
const myImage1 = document.getElementById('myImage1')
const myImage2 = document.getElementById('myImage2')
const myImage3 = document.getElementById('myImage3')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    if (chk.checked) {
        myImage1.src = '/images/LinkedinLigth.svg'
        myImage2.src = '/images/gitHubLigth.svg'
        myImage3.src = '/images/PersonLinesFillLigth.svg'
    } else {
        myImage1.src = '/images/Linkedin.svg'
        myImage2.src = '/images/gitHub.svg'
        myImage3.src = '/images/PersonLinesFill.svg'
    }
})