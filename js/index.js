let up = document.querySelector('.up'),
    hoverDNone = document.querySelector('.hb-text'),
    headTop = document.querySelector('.ht-current'),
    headTopM = document.querySelector('.ht-current-m'),
    popularPrev = document.getElementById('hp-prev'),
    popularNext = document.getElementById('hp-next'),
    popularBox = document.getElementById('hp-box'),
    saleBox = document.getElementById('hs-box'),
    shopPlus = document.getElementById('increment'),
    shopMinus = document.getElementById('decrement'),
    shopCurrent = document.querySelector('.ccard-amount'),
    salePopWidth = document.querySelector('.hp-pos'),
    catalogCurrentIcon = document.querySelectorAll('#catalog-current'),
    screenWidth = document.documentElement.clientWidth

up.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
})


// // Slider Scripts // 
// $(function () {
//     let elemCount = 3,
//         current = 1,
//         elemWidth = 350,
//         move = 0;

//     $("#hp-next, #hs-next").click(function () {
//         if (current < elemCount) {
//             $(".hp-box").toggleClass("move");
//             move += elemWidth;
//             $(".hp-box").css(
//                 "transform",
//                 "translateX(-" + move + "px)"
//             );
//             current++;
//         }
//     });
//     $("#hp-prev, #hs-prev").click(function () {
//         if (current > 0) {
//             $(".hp-box").toggleClass("move");
//             move -= elemWidth;
//             current--;
//             $(".hp-box").css(
//                 "transform",
//                 "translateX(-" + move + "px)"
//             );
//         }
//     });
// });
/* ********* ********* */

/* SlickJS Slider Ad */
$(document).ready(function () {
    $('.popular-slide').slick({

    });
});

/* ********* ********** */

window.addEventListener('resize', function () {
    if (this.document.documentElement.clientWidth > 768) {
        popularBox.style.transform = 'translateX(0)'
        saleBox.style.transform = 'translateX(0)'
    }
})
