function tempo(meses) {
    let listanumeros=[]

    for (let i = 1; i <= meses; i++) {
        listanumeros.push(i)
    }
    return listanumeros
}



function total(valortotal, meses) {
    let listavalor=[]
//    for (let i = 0; i = valortotal; i++) {
//        listavalor.push(i)
//    }

    let lt = valortotal / meses
    listavalor.push(lt)

    return listavalor
}



function mostrar() {
    const meses = Number(document.getElementById('parcela').value)
    const valortotal = Number(document.getElementById('valor').value)
    const juros = Number(document.getElementById('juros').value)

    const num = tempo(meses)
    const valorinitial = total(valortotal)
    //const subtrair = listsob(numeros)
    //const multiplica = listmult(numeros)
    //const dividir = listdiv(numeros)
    
//
    
    document.getElementById('0').innerHTML = num.join('<br>')
    document.getElementById('1').innerHTML = valorinitial.join('<br>')
    //document.getElementById('2').innerHTML = subtrair.join('<br>')
    //document.getElementById('3').innerHTML = multiplica.join('<br>')
    //document.getElementById('4').innerHTML = dividir.join('<br>')
    
}