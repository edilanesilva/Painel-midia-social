const html = document.querySelector('html')
const checkbox = document.querySelector('#dark_mode')
/* pega o estilo */

const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style)



const lightTheme = {
    bg: getStyle(html, "--white-bg"),
    topHeaderBg: getStyle(html, "--veryPaleBlue-topbg"),
    cardBg: getStyle(html, "--cardbg"),
    colorText: getStyle(html, "--darkGrayishBlue-text"),
    cardText: getStyle(html, "--veryDarkBlue-text")
}

const darkTheme = {
    bg: getStyle(html, "--dark-blue-bg"),
    topHeaderBg: getStyle(html, "--dark-blue-topbg"),
    cardBg: getStyle(html, "--dark-blue-cardbg"),
    colorText: getStyle(html, "--blue-text"),
    cardText: getStyle(html, "--white-text")
}




const changeColors = (colors) => {
    console.log(colors)

}


checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeColors(lightTheme) : changeColors(darkTheme)
})