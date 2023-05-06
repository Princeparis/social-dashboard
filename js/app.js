const menuItems = document.querySelectorAll('.menu-item')
const notificationPopup = document.querySelector('.notification-popup')
const notificationCount = document.querySelector('.notification-count')
const messagesNotification = document.querySelector('#messages-notification')
const msgNotification = messagesNotification.querySelector('.notification-count')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearchBox = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
const root = document.querySelector(':root')
const colorPallette = document.querySelectorAll('.choose-color span')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

// function to remove active class
function changeActiveMenu () {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveMenu()
        item.classList.add('active')
        if (item.id !== 'notification') {
            notificationPopup.style.display = 'none'
            notificationCount.style.display = 'block'
        } else {
            notificationPopup.style.display = 'block'
            notificationCount.style.display = 'none'
        }
        // item.id !== 'notification' ? notificationPopup.style.display = 'none' : notificationPopup.style.display = 'block'
    })
})

// SEARCHMESSAGE FUNCTION CALLED IN SEARCHBOX
function searchMessages () {
    const val = messageSearchBox.value.toLowerCase()
    message.forEach(user => {
        let name = user.querySelector('h4').textContent.toLowerCase()
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex'
        } else {
            user.style.display = 'none'
        }

    })
}

// SEARCHBOX FILTER BY KEYUP
messageSearchBox.addEventListener('keyup', searchMessages)

messagesNotification.addEventListener('click', () => {
    msgNotification.style.display = 'none'
    messages.style.boxShadow = '0 0 1rem var(--color-pry)'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
    
})

// THEME CUSTOMIZATION

function openThemeModal () {
    themeModal.style.display = 'grid'
}

function closeThemeModal (event) {
    if (event.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}
theme.addEventListener('click', openThemeModal)

themeModal.addEventListener('click', closeThemeModal)


// FONT

function removeSizeSelector () {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', event => {
        let fontSize
        removeSizeSelector()
        event.target.classList.toggle('active')
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }
    
        document.querySelector('html').style.fontSize = fontSize
    })
})

// COLOR 

function removeColorSelector () {
    colorPallette.forEach(color => {
        color.classList.remove('active')
    })
}

colorPallette.forEach(color => {
    color.addEventListener('click', (event) => {
        removeColorSelector()
        event.target.classList.add('active')
        if (color.classList.contains('color-1')) {
            root.style.setProperty('--color-pry', 'hsl(252, 75%, 60%)')
        } else if (color.classList.contains('color-2')) {
            root.style.setProperty('--color-pry', 'hsl(52, 75%, 60%)')
        } else if (color.classList.contains('color-3')) {
            root.style.setProperty('--color-pry', 'hsl(352, 75%, 60%)')
        } else if (color.classList.contains('color-4')) {
            root.style.setProperty('--color-pry', 'hsl(152, 75%, 60%)')
        } else if (color.classList.contains('color-5')) {
            root.style.setProperty('--color-pry', 'hsl(202, 75%, 60%)')
        }
    })
})



let lightColorLightness
let whiteColorLightness
let darkColorLightness

function changeBG () {
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--light-color-lightness', lightColorLightness)
}

bg2.addEventListener('click', () => {
    lightColorLightness = '15%'
    whiteColorLightness = '20%'
    darkColorLightness = '95%'

    bg2.classList.add('active')

    bg1.classList.remove('active')
    bg3.classList.remove('active')

    changeBG()
})
bg3.addEventListener('click', () => {
    lightColorLightness = '0%'
    whiteColorLightness = '10%'
    darkColorLightness = '95%'

    bg3.classList.add('active')

    bg1.classList.remove('active')
    bg2.classList.remove('active')

    changeBG()
})
bg1.addEventListener('click', () => {

    bg1.classList.add('active')

    bg3.classList.remove('active')
    bg2.classList.remove('active')

    window.location.reload()
})