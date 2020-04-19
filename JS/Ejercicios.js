function Ejer1(edad){
    
    if( edad < 18 ){
        console.log('No puedes conducir');
        
    }
    else if( edad >= 18 ){
        console.log('Puedes conducir , ahora consiguete un coche :)w')
        
    }
}

function Ejer2(){
    let nota = document.getElementById("nota").value
    let calificacion = ""
        if (nota <=3 && nota >=0){
            calificacion="Muy deficiente"        
        }
        else if(nota <=5 && nota >3){
            calificacion="Insuficiente"
        }
        else if(nota <=6 && nota >5){
            calificacion="Suficiente"
        }
        else if(nota <=7 && nota >6){
            calificacion="Bien"
        }
        else if(nota <=9 && nota >7){
            calificacion="Notable"
        }
        else if(nota <=10 && nota >9){
            calificacion="Sobrresaliente"
        }

    document.getElementById("resultado2").innerHTML=calificacion
            
}



