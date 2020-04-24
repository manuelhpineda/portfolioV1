wow = new WOW(
    {
        mobile: false
    }
);
new WOW().init();

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    // owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });

    //smooth scroll
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        console.log('click');

        $('.nav-link').each(function () {
            $(this).removeClass('current');
        });
        $(this).addClass('current');

        let target = this.hash,
            menu = target;
        let $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const showMore = document.getElementById('work');

//event triggered if user touches the hamburger

const screenWidth = window.screen.width;

hamburger.addEventListener('click', () => {
    burger();
});

navLinks.addEventListener('click', () => {
    if (screenWidth <= 768) {
        burger();
        console.log('triggered');
    }
});

function burger() {
    navLinks.classList.toggle('open');

    //burger animation
    hamburger.classList.toggle('toggle');

    //links animation
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
    })
}

function expand() {
    showMore.classList.toggle('w-expand');

    const x = document.getElementById('showMoreBtn');

    if (x.innerHTML === "Show More") {
        x.innerHTML = "Show Less";
    } else {
        x.innerHTML = "Show More";
    }
}

function onScroll() {
    let scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link').removeClass("");
            currLink.addClass("current");
        } else {
            currLink.removeClass("current");
        }
    });
}

