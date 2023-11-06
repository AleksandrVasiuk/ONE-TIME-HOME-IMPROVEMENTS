const blurActive = document.querySelector('.active__blur')
const item_right = document.querySelectorAll('.item_right')
const item_left = document.querySelectorAll('.item_left')
blurActive.addEventListener('mouseenter', () => {
    const body = document.body
    body.classList.toggle('isBgBlured')
    item_right.forEach(item_right => item_right.classList.toggle('isBlured'))
    item_left.forEach(item_left => item_left.classList.toggle('isBlured'))
})

blurActive.addEventListener('mouseleave', () => {
    const body = document.body
    body.classList.toggle('isBgBlured')
    item_right.forEach(item_right => item_right.classList.toggle('isBlured'))
    item_left.forEach(item_left => item_left.classList.toggle('isBlured'))
})

const bluractive = document.querySelectorAll('.active__blur')
const itemright = document.querySelector('.item_right')
const itemleft = document.querySelectorAll('.item_left')
itemright.addEventListener('mouseenter', () => {
    const body = document.body
    body.classList.toggle('isBgBlured')
    bluractive.forEach(bluractive => bluractive.classList.toggle('isBlured'))
    itemleft.forEach(itemleft => itemleft.classList.toggle('isBlured'))
})

itemright.addEventListener('mouseleave', () => {
    const body = document.body
    body.classList.toggle('isBgBlured')
    bluractive.forEach(bluractive => bluractive.classList.toggle('isBlured'))
    itemleft.forEach(itemleft => itemleft.classList.toggle('isBlured'))
})

const blur_active = document.querySelectorAll('.active__blur')
const itemRight = document.querySelectorAll('.item_right')
const itemLeft = document.querySelector('.item_left')
itemLeft.addEventListener('mouseenter', () => {
    const body = document.body
    body.classList.toggle('isBgBlured')
    blur_active.forEach(blur_active => blur_active.classList.toggle('isBlured'))
    itemRight.forEach(itemRight => itemRight.classList.toggle('isBlured'))
})

itemLeft.addEventListener('mouseleave', () => {
    const body = document.body
    body.classList.toggle('isBgBlured')
    blur_active.forEach(blur_active => blur_active.classList.toggle('isBlured'))
    itemRight.forEach(itemRight => itemRight.classList.toggle('isBlured'))
})