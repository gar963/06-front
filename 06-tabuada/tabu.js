function listanumero(numeros){
    let listanumeros=[]

    for (let i = 1; i <= numeros; i++) {
        listanumeros.push(i)
    }
    return listanumeros
}



function listsom(numeros){
    let listasoma=[]

    for (let i = 1; i <= numeros; i++) {
        listasoma.push(i+numeros)
    }
    return listasoma
}

function listsob(numeros){
    let listasub=[]

    for (let i = 1; i <= numeros; i++) {
        listasub.push(numeros-i)
    }
    return listasub
}



function listmult(numeros){
    let listamulti=[]

    for (let i = 1; i <= numeros; i++) {
        listamulti.push(numeros*i)
    }
    return listamulti
}



function listdiv(numeros){
    let listadividi=[]

    for (let i = 1; i <= numeros; i++) {
        listadividi.push((numeros/i).toFixed(2))
    }
    return listadividi
}



function mostrar() {
    const numeros = Number(document.getElementById('numero').value)

    const num = listanumero(numeros)
    const soma = listsom(numeros)
    const subtrair = listsob(numeros)
    const multiplica = listmult(numeros)
    const dividir = listdiv(numeros)
    

    document.getElementById('numb').innerHTML = num.join('<br>')
    document.getElementById('soma').innerHTML = soma.join('<br>')
    document.getElementById('subtrai').innerHTML = subtrair.join('<br>')
    document.getElementById('multi').innerHTML = multiplica.join('<br>')
    document.getElementById('dividir').innerHTML = dividir.join('<br>')
    
}