function informar(){
    let mes = window.prompt('Digite o mês em extenso (ex: Janeiro)')
    let resultado = document.getElementById('res')
    let estação
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEIRO': case 'MARÇO':
            estação = 'INVERNO'
        break

        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação= 'PRIMAVERA'
        break

        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
        break

        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
        break

        default:
            estação = 'INVÁLIDA'
    }
    resultado.innerHTML = `No mês de ${mes}, estamos na estação ${estação}`
}