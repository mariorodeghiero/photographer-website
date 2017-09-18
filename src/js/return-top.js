
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
        document.getElementById("btn-return-top").style.display = "block";
    } else {
        document.getElementById("btn-return-top").style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
}