const html = document.querySelector('html');
const topHeader = document.querySelector('.background-box');
const checkbox = document.querySelector('#dark_mode');
const body = document.querySelector('body');
const cards = document.querySelectorAll(".card")
const numbers = document.querySelectorAll('[data-number]')
const title = document.querySelectorAll('[data-title]')


/* pega o estilo */
const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style)

const lightTheme = {
    bg: getStyle(html, "--white-bg"),
    topHeaderBg: getStyle(html, "--top-header-bg"),
    cardBg: getStyle(html, "--cardbg"),
    colorText: getStyle(html, "--darkGrayishBlue-text"),
    cardText: getStyle(html, "--veryDarkBlue-text"),
    selected: getStyle(html, "--light-selected")
}

const darkTheme = {
    bg: getStyle(html, "--dark-blue-bg"),
    topHeaderBg: getStyle(html, "--dark-blue-topbg"),
    cardBg: getStyle(html, "--dark-blue-cardbg"),
    colorText: getStyle(html, "--white-bg"),
    cardText: getStyle(html, "--white-text"),
    selected: getStyle(html, "--dark-selected")

}

function changeColors(colors) {
    cards.forEach(card => {
        card.style.background = colors.cardBg;
        card.addEventListener('mouseover', () => {
            card.style.background = colors.selected
        })
        card.addEventListener('mouseout', () => {
            card.style.background = colors.cardBg
        })
    });


    numbers.forEach(number => {
        number.style.color = colors.cardText;

    });

    title.forEach(title => {
        title.style.color = colors.cardText;
    });

    body.style.color = colors.colorText;
    body.style.background = colors.bg;
    topHeader.style.background = colors.topHeaderBg;
}


checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeColors(lightTheme) : changeColors(darkTheme)
})

