window.onload = () => {
    // const setBackgroundColor = (color) => {
    //     let content = document.querySelector('.conteudo');
    //     content.style.setBackgroundColor = color;
    //     localStorage.setItem('backgroundColor', color);
    // }

    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll(".paragrafo")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.color = color
        }
        localStorage.setItem("fontColor", color)
    }

    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll(".paragrafo")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.fontSize = size
        }
        localStorage.setItem("fontSize", size)
    }

    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll(".paragrafo")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.lineHeight = height
        }
        localStorage.setItem("lineHeight", height)
    }

    const setFontFamily = (family) => {
        let paragraphs = document.querySelectorAll(".paragrafo")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.fontFamily = family
        }
        localStorage.setItem("fontFamily", family)
    }
    
    // let botoesCorFundo = document.querySelectorAll("#cor-fundo>button")
    // for (let index = 0; index < botoesCorFundo.length; index += 1) {
    //     botoesCorFundo[index].addEventListener("click", (event) => {
    //         setBackgroundColor(event.target.innerHTML);
    //     })
    // }

    let botoesCorFonte = document.querySelectorAll("#cor-fonte>button")
    for (let index = 0; index < botoesCorFonte.length; index += 1) {
        botoesCorFonte[index].addEventListener("click", (event) => {
        setFontColor(event.target.innerHTML)
        })
    }

    let botoesTamanhoFonte = document.querySelectorAll("#tamanho-fonte>button")
    for (let index = 0; index < botoesTamanhoFonte.length; index += 1) {
        botoesTamanhoFonte[index].addEventListener("click", (event) => {
        setFontSize(event.target.innerHTML)
        })
    }

    let botoesEspacamento = document.querySelectorAll("#espacamento-linhas>button")
    for (let index = 0; index < botoesEspacamento.length; index += 1) {
        botoesEspacamento[index].addEventListener("click", (event) => {
        setLineHeight(event.target.innerHTML)
        })
    }

    let botoesTipoFonte = document.querySelectorAll("#tipo-fonte>button")
    for (let index = 0; index < botoesTipoFonte.length; index += 1) {
        botoesTipoFonte[index].addEventListener("click", (event) => {
        setFontFamily(event.target.innerHTML)
        })
    }

    const initialize = () => {
        // let backgroundColor = localStorage.getItem("backgroundColor")
        // if (backgroundColor) setBackgroundColor(backgroundColor)

        let fontColor = localStorage.getItem("fontColor")
        if (fontColor) setFontColor(fontColor)

        let fontSize = localStorage.getItem("fontSize")
        if (fontSize) setFontSize(fontSize)

        let lineHeight = localStorage.getItem("lineHeight")
        if (lineHeight) setLineHeight(lineHeight)

        let fontFamily = localStorage.getItem("fontFamily")
        if (fontFamily) setFontFamily(fontFamily)
    }

      initialize();
}