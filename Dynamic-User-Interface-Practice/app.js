const visibleClass = (className) => {
    Array.from(className).forEach(li => {
        if (li.style.display == 'flex') {
            li.style.display = 'none';
        } else {
            li.style.display = 'flex';
        }
    });
}

document.getElementById('dropdown').onclick = function () {
    let dropDownList = document.getElementsByClassName('dropdown-list');
    visibleClass(dropDownList);
}

//image carousel section 


let selectedSlide = 0;
let navCircles = document.getElementsByClassName('nav-circles');


function setInvisible() {
    for (i = 0; i < 3; i++) {
        document.getElementById(`img-${i}`).style.display = 'none';
        document.getElementById(`nav-circle-${i}`).style.backgroundColor = 'white';
        console.log(`img-${i} is now invisible`);
    }
}

function previousSlide() {
    if (selectedSlide > 0) {
        selectedSlide--;
        visible(selectedSlide);
    } else if (selectedSlide == 0) {
        selectedSlide = 2;
        visible(selectedSlide);
    }
}
function nextSlide() {
    if (selectedSlide < 2) {
        selectedSlide++;
        visible(selectedSlide);
    } else if (selectedSlide >= 2) {
        selectedSlide = 0;
        visible(selectedSlide);
    }
    console.log(`slide changer`);
}

function visible(slideNumber) {
    let parsedInt = parseInt(slideNumber);
    console.log(`parsed int = ${parsedInt}`)
    setInvisible();
    for (i = 0; i < 3; i++) {
        if (i == parsedInt) {
            document.getElementById(`img-${i}`).style.display = 'flex';
            document.getElementById(`nav-circle-${i}`).style.backgroundColor = 'grey';
            console.log(`selected slide ${parsedInt}`);
        }
    }
}

Array.from(navCircles).forEach(div => {
    div.onclick = function () {
        //use dataset.key to pop up the corresponding image
        console.log(div);
        visible(div.dataset.key);
        clearInterval(imageCarousel);
    }
});

document.getElementById('left-arrow').onclick = function () {
    previousSlide();
    clearInterval(imageCarousel);
}
document.getElementById('right-arrow').onclick = function () {
    nextSlide();
    clearInterval(imageCarousel);
}

setInvisible();
document.getElementById('img-0').style.display = 'flex';
document.getElementById(`nav-circle-0`).style.backgroundColor = 'grey';
let imageCarousel = setInterval(nextSlide, 5000);