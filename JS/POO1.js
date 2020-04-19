class Automovil{
    constructor(llantas,asientos,vmax,velocidad,nombre){
        this.llantas = llantas
        this.asientos = asientos
        this.vmax = vmax
        this.velocidad = velocidad
        this.nombre = nombre
    }

    Endender(){
        return `El coche ${this.nombre} está encendido`
    }

    Acelerar(cantidad){
        this.velocidad += cantidad
        return `El coche ${this.nombre} va a una velocidad de ${this.velocidad} km/h`
    }
}

class Motocicleta extends Automovil{
    
    constructor(llantas,asientos,vmax,velocidad,nombre,ejes,seguros){
        super(llantas,asientos,vmax,velocidad,nombre)
        this.ejes = ejes
        this.seguros = seguros
    }
}

class Coche extends Automovil{
    constructor(llantas,asientos,vmax,velocidad,nombre,tapetes){
        super(llantas,asientos,vmax,velocidad,nombre)
        this.tapetas = tapetes
    }
}


let inventario = []

let Moto = new Motocicleta(2,1,50,20,'NS250',2,false)
let carro = new Coche(4,5,100,50,'Jetta',true)

inventario.push(Moto,carro)

console.log(inventario);
