

function numberlist(quantidade){
    let listanumeros=[]

    for (let i = 1; i <= quantidade; i++) {
        listanumeros.push(i)
    }
    return listanumeros
}

function listapar(quantidade) {
    let pares = []
    
    
    for (let i = 1; i <= quantidade  ; i++) {
        
            pares.push(i * 2)
         
    }
    return pares
    
}

function listimpar(quantidade) {
    let impar =[]
    for (let i = 1; i <= quantidade ; i++) {
        
            impar.push(i * 2 - 1 )
        
        
    }
         
    
    return impar
}

function listcinco(quantidade) {
    let mult5 =[]
    for (let i = 1; i <= quantidade ; i++) {
        
            mult5.push(i * 5 )
        
        
    }
         
    
   return mult5
}

function listpoten(quantidade) {
    let potenci =[]
    for (let i = 0; i <= quantidade ; i++) {
        
            potenci.push( 2 ** i )
        
        
    }
         
    
    return potenci
}

function criarlinha(num, par, impar, multi5, pot2) {
    
}

function contador() {
    const quantidade = Number(document.getElementById('numero').value)

    const num = numberlist(quantidade)
    const par = listapar(quantidade)
    const impar = listimpar(quantidade)
    const multi5 = listcinco(quantidade)
    const pot2 = listpoten(quantidade)

    document.getElementById('qtdd').innerHTML = num.join('<br>')
    document.getElementById('par').innerHTML = par.join('<br>')
    document.getElementById('impar').innerHTML = impar.join('<br>')
    document.getElementById('mult').innerHTML = multi5.join('<br>')
    document.getElementById('potencia').innerHTML = pot2.join('<br>')
    
}

