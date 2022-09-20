import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper'

function initSliders() {
    if (document.querySelector('.main-block__slider')) {
        new Swiper('.main-block__slider', {
            modules: [Pagination, Parallax, Autoplay],
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 50,
            speed: 800,
            parallax: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.controll-main-block__dotts',
                clickable: true
            },
            on: {
                init: function (swiper) {
                    const allSlides = document.querySelector(
                        '.fraction-controll__all'
                    )
                    const allSlidesItems = document.querySelectorAll(
                        '.slide-main-block:not(.swiper-slide-duplicate)'
                    )

                    allSlides.innerHTML =
                        allSlidesItems.length < 10
                            ? `0${allSlidesItems.length}`
                            : allSlidesItems.length
                },
                slideChange: function (swiper) {
                    const currentSlide = document.querySelector(
                        '.fraction-controll__current'
                    )

                    currentSlide.innerHTML =
                        swiper.realIndex + 1 < 10
                            ? `0${swiper.realIndex + 1}`
                            : swiper.realIndex + 1
                }
            }
        })
    }

    if (document.querySelector('.products__slider')) {
        new Swiper('.products__slider', {
            modules: [Pagination],
            observeParents: true,
            slidesPerView: 4,
            // loop: true,
            watchOverflow: true,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            pagination: {
                el: '.products-slider__dotts',
                clickable: true
            },
            on: {
                // init: function(swiper){

                // }
            }
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
