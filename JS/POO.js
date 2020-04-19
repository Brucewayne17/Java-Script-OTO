
class Coche{
    constructor(id,nombre,serie,velocidad){
        this.id = id
        this.nombre = nombre
        this.serie = serie
        this.velocidad = velocidad
    }

    Endender(){
        return `El coche ${this.nombre} está encendido`
    }
    Acelerar(suma){
        this.velocidad += suma
        return `El coche ${this.nombre} va a una velocidad de ${this.velocidad} km/h`
    }
}

let Inventario = []

let Jetta = new Coche(1,'Jetta','VK6', 50)
let Golf = new Coche(2,'Golf','VK7', 60)

Inventario.push(Jetta,Golf)

console.log(Inventario)





