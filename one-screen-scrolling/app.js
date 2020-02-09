function scrollToGreen() { scrollTo('green'); }
function scrollToBlue() { scrollTo('blue'); }
function scrollToRed() { scrollTo('red'); }

function scrollTo(color) {
    document.getElementById(`mr-${color}`).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}
