

window.onscroll = () => {
    let header = document.querySelector('header')

    header.classList.toggle('onscroll', window.scrollY > 100)
}

