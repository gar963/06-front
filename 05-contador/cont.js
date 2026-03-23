

function numberlist(quantidade){
    let listanumeros=[]

    for (let i = 1; i <= quantidade; i++) {
        listanumeros.push(i)
    }
    console.log( listanumeros)
}

function listapar(quantidade) {
    let pares = []
    
    
    for (let i = 1; i <= quantidade  ; i++) {
        
            pares.push(i * 2)
         
    }
    console.log(pares)
    
}

function listimpar(quantidade) {
    let impar =[]
    for (let i = 1; i <= quantidade ; i++) {
        
            impar.push(i * 2 - 1 )
        
        
    }
         
    
    console.log(impar)
}

function criarlinha(num, par, impar, multi5, pot2) {
    
}


numberlist(5)
listapar(5)
listimpar(5)
