let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const logo = document.querySelector('.navbar-brand-icon')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
    logo.src = 'assets/images/PURRFECT-rresume---darkmode-2.png'
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    logo.src = '/assets/images/PURRFECT-RESUME.png'
}

if(darkmode === "active") { 
    enableDarkmode();
} else {
    disableDarkmode();
}

themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})