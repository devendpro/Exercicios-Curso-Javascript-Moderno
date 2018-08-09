const colors = {
    p: '#199',
    div: '#992',
    span: '#939',
    span: '#494',
    section: '#759',
    ul: '#129',
    ol: '#717',
    header: '#808',
    nav: '#999',
    main: '#0000AA',
    footer: '#0CB',
    form: '#000088',
    body: '#1D6722',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
});