var requestAnimationFrame =
    window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function () {
    const goTopButton = document.querySelectorAll('.mdui-hidden-xs0')[0];
    const windowViewPortHeight = window.innerHeight;
    var isRequestingAnimationFrame = false;

    if (!goTopButton) {
        return;
    }

    goTopButton.style.display = 'none';

  /*
    goTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
*/
    window.addEventListener('scroll', function () {
        if (!isRequestingAnimationFrame) {
            requestAnimationFrame(filterGoTopButtonVisibility);
            isRequestingAnimationFrame = true;
        }
    });

    function filterGoTopButtonVisibility(timestamp) {
        var windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
            goTopButton.style.display = 'inline-block';
            isRequestingAnimationFrame = false;
        } else {
            goTopButton.style.display = 'none';
            requestAnimationFrame(filterGoTopButtonVisibility);
        }
    }
});

