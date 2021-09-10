function incrementar(x){
    let numero = parseInt(x);
    let a = document.getElementById('incrementar#' + x);
    a.value  = parseInt(a.value, 10) + 1; 
}

function decrementar(x){
    let numero = parseInt(x);
    let a = document.getElementById('incrementar#' + x);
    if(a.value > 0){
        a.value  = parseInt(a.value, 10) - 1;  
    }
}

function agregarCarrito(x, y){
    let a = document.getElementById('incrementar#' + x).value;
    if(a > 1){
        alert('Se han agregado ' + a + ' unidades de bolis de ' + y + ' al carrito.');    
    }
    else if(a == 1){
        alert('Se ha agregado un boli de ' + y + ' al carrito.');  
    }
    document.getElementById('incrementar#' + x).value = 0;
}

function quitarCarrito(x, y){
    let a = document.getElementById('incrementar#' + x).value;
    if(a > 1){
        alert('Se han quitado ' + a + ' unidades de bolis de ' + y + ' al carrito.');   
    }
    else if(a == 1){
        alert('Se ha quitado un boli de ' + y + ' al carrito.');   
    }
    document.getElementById('incrementar#' + x).value = 0;
}