import * as noUiSlider from 'nouislider'
import wNumb from 'wnumb'

export function rangeInit() {
    const rangeItems = document.querySelectorAll('[data-range]')

    if (rangeItems.length) {
        rangeItems.forEach((rangeItem) => {
            const fromValue = rangeItem.querySelector('[data-range-from]')
            const toValue = rangeItem.querySelector('[data-range-to]')
            const item = rangeItem.querySelector('[data-range-item]')

            const input1 = rangeItem.querySelector('.filter__input_1')
            const input2 = rangeItem.querySelector('.filter__input_2')
            const inputs = [input1, input2]

            const moneyFormat = wNumb({
                decimals: 0
            })

            const steps = () => {
                if (Number(toValue.value) > 10000) {
                    return (Number(toValue.value) * 2) / 100
                }
                return 1
            }

            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)],
                connect: true,
                tooltips: [moneyFormat, moneyFormat],
                step: steps(),
                range: {
                    min: [Math.round(Number(fromValue.dataset.rangeFrom))],
                    max: [Math.round(Number(toValue.dataset.rangeTo))]
                }
            })

            item.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = Math.round(values[handle])
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
