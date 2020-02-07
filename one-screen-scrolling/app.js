function scrollToGreen() { scrollTo('mr-green'); }
function scrollToBlue() { scrollTo('mr-blue'); }
function scrollToRed() { scrollTo('menu'); }

function scrollTo(color) {
    document.getElementById(`${color}`).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}
