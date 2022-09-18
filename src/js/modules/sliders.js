import Swiper, { Pagination } from 'swiper'

function initSliders() {
    if (document.querySelector('.main-block__slider')) {
        new Swiper('.main-block__slider', {
            modules: [Pagination],
            // observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            pagination: {
                el: '.controll-main-block__dotts',
                clickable: true
            },
            on: {}
        })
    }
}
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index]
            const sliderScrollBar =
                sliderScrollItem.querySelector('.swiper-scrollbar')
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true
                }
            })
            sliderScroll.scrollbar.updateSize()
        }
    }
}

window.addEventListener('load', function (e) {
    initSliders()
    //initSlidersScroll();
})
