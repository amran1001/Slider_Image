let flag=0;

function showSlides() {
    let slides = document.getElementsByClassName('slide');
    if (flag < 0) {
        flag = slides.length-1;
    }
    if (flag == slides.length) {
        flag = 0;
    }
    for (let x of slides)
        x.style.display = "none";
    console.log(flag);
    slides[flag].style.display = "block";
}
showSlides( );
function Pass(num)
{
    flag=flag+num;
    showSlides();
}

