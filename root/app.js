let progressSection = document.querySelector('.progress');
let progressBar = document.querySelector('.progress__bar');
let progressNum = document.querySelector('.progress__num');

let x, y;

function updateProgressBar() {

    progressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()

//14:20