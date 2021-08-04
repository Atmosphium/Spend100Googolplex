function Buy (Button) {
    const Spent = document.getElementById ('Spent').getElementsByTagName ('H4') [0].getElementsByTagName ('SPAN') [0],
          Spent_Money = Spent.innerHTML.replaceAll ('.', '')

    const Price = Button.previousSibling.previousSibling.getElementsByTagName ('SPAN') [0].innerHTML.replaceAll ('.', '')

    Spent.innerHTML = String (Number (Spent_Money) + Number (Price)).replace (/(.)(?=(\d{3})+$)/g, '$1.')

    if ((Number (Spent_Money) + Number (Price)) >= 10**(10**100)) alert ('OMG! YOU HAVE SPENT 100 GOOGOLPLEX!'); else return
}

function Share (Button) {
    window.open (`https://twitter.com/intent/tweet?url=Hey, there! I've spent $${document.getElementById ('Spent').getElementsByTagName ('H4') [0].getElementsByTagName ('SPAN') [0].innerHTML} in www.100googolplex.ml! What about you?`)
}