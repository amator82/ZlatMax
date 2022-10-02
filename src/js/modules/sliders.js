import Swiper, {
    Navigation,
    Pagination,
    Parallax,
    Autoplay,
    Thumbs
} from 'swiper'

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

    if (document.querySelector('.products-slider__slider')) {
        new Swiper('.products-slider__slider', {
            modules: [Pagination, Autoplay],
            observeParents: true,
            slidesPerView: 4,
            // loop: true,
            watchOverflow: true,
            spaceBetween: 30,
            speed: 800,
            pagination: {
                el: '.products-slider__dotts',
                clickable: true,
                dynamicBullets: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            },
            on: {
                // init: function(swiper){
                // }
            }
        })
    }

    if (document.querySelector('.products-new')) {
        new Swiper('.products-new__slider', {
            modules: [Pagination, Autoplay],
            observeParents: true,
            slidesPerView: 3,
            // loop: true,
            watchOverflow: true,
            spaceBetween: 30,
            speed: 800,
            pagination: {
                el: '.products-new__dotts',
                clickable: true,
                dynamicBullets: true
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1370: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            on: {
                // init: function(swiper){
                // }
            }
        })
    }

    if (document.querySelector('.thumbs-images')) {
        const thumbsSwiper = new Swiper('.thumbs-images', {
            modules: [Pagination, Autoplay, Thumbs],
            observeParents: true,
            slidesPerView: 4,
            watchOverflow: true,
            spaceBetween: 16,
            speed: 800,
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                1330: {
                    slidesPerView: 4,
                    spaceBetween: 16
                }
            },
            on: {
            }
        })

        new Swiper('.images-product__slider', {
            modules: [Pagination, Autoplay, Thumbs],
            observeParents: true,
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 30,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: thumbsSwiper
            },
            on: {
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
