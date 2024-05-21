const closePage = () => {
    window.open()
    // ele fecha a página se não houver uma página anterior a dele
    window.close()
}

const backPage = () => {
    // ele volta a página se houver uma página anterior a dele
    window.history.back()
}   

const localization = () => {
    alert("Sua página está localizada em: " + window.location)
}