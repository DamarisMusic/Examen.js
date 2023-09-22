/*1)*/
function calcularIVA(x)
{
    let Iva = x * 100 / 21
    return Iva
}
console.log(calcularIVA(2000))


/*2)*/
function descuentoIVA(x)
{
    let valorProducto = x - calcularIVA
    return valorProducto
}
valorProducto = Number(prompt('Ingresa el precio de una tarta: '))
console.log('El precio sin IVA de tu producto (tarta) es: ' + valorProducto)


/*3)*/
function pesos(dólares)
{
    let calcularPesos = 750 * dólares
    return calcularPesos
}
calcularPesos = Number(prompt('Ingresa una cantidad determinada de dólares: '))
alert('Tienes en total: ' + calcularPesos)

function dólares(pesos)
{
    let calculardólares = pesos / 750
    return calculardólares
}
calculardólares = Number(prompt('Ingresa una cantidad determinada de pesos: '))
alert('Tienes en total:' + calculardólares)

