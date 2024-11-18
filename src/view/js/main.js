const $ = selector => document.querySelector(selector)
const $menu = $('#menu')
const $refresh = $('#refresh')
const $extendMenu = $('#extendedMenuNew')

$menu.style.display = 'none'

document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    this.valueX = e.x
    this.valueY = e.y
    $menu.style.left = valueX + 'px'
    $menu.style.top = valueY + 'px'
    $menu.style.display = 'block'
})

document.addEventListener('click', (e) => {
    if (e.button === 0) {
        $menu.style.display = 'none'
        $extendMenu.style.display = 'none'
    } else if (e.button === 1) {
        $menu.style.display = 'none'
    } else if (e.button === 2) {
        rightClickE(e)
    }
})

$refresh.addEventListener('click', (e) => {
    window.location.reload()
})

const $newExtends = $('#newExtends')
$extendMenu.style.display = 'none'
$newExtends.addEventListener('mouseover', () => {
    const positionX = valueX + 220
    const positionY = valueY + 50 // the height of the menu
    $extendMenu.style.left = positionX + 'px'
    $extendMenu.style.top = positionY + 'px'
    $extendMenu.style.display = 'block'
})

$newExtends.addEventListener('mouseout', () => {
    $extendMenu.style.display = 'none'
})

$extendMenu.addEventListener('mouseover', () => {
    $extendMenu.style.display = 'block'
})