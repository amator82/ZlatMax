import * as noUiSlider from 'nouislider'

export function rangeInit() {
    const rangeItems = document.querySelectorAll('[data-range]')

    if (rangeItems.length) {
        rangeItems.forEach((rangeItem) => {
            const fromValue = rangeItem.querySelector('[data-range-from]')
            const toValue = rangeItem.querySelector('[data-range-to]')
            const item = rangeItem.querySelector('[data-range-item]')
            
            const input1 = document.querySelector('.price-filter__input_1')
            const input2 = document.querySelector('.price-filter__input_2')
            const inputs = [input1, input2]

            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)],
                connect: true,
                tooltips: [true, true],
                range: {
                    min: [Number(fromValue.dataset.rangeFrom)],
                    max: [Number(toValue.dataset.rangeTo)]
                }
            })

            item.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = values[handle]
            })

            inputs.forEach(function (input, handle) {
                input.addEventListener('change', function () {
                    item.noUiSlider.setHandle(handle, this.value)
                })

                input.addEventListener('keydown', function (e) {
                    var values = item.noUiSlider.get()
                    var value = Number(values[handle])
                    var steps = item.noUiSlider.steps()
                    var step = steps[handle]
                    var position

                    switch (e.which) {
                        case 13:
                            item.noUiSlider.setHandle(handle, this.value)
                            break

                        case 38:
                            position = step[1]

                            if (position === false) {
                                position = 1
                            }

                            if (position !== null) {
                                item.noUiSlider.setHandle(
                                    handle,
                                    value + position
                                )
                            }

                            break

                        case 40:
                            position = step[0]

                            if (position === false) {
                                position = 1
                            }

                            if (position !== null) {
                                item.noUiSlider.setHandle(
                                    handle,
                                    value - position
                                )
                            }

                            break
                    }
                })
            })
        })
    }
}
rangeInit()
