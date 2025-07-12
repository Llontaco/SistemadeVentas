class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }   

    toString() {
        return `Id Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log('No se pueden agregar más productos a la orden');
        }
    }

    calcularTotal() {
        let total = 0;
        for (let producto of this._productos) {
            total += producto.precio;
        }
        return total;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += '\n' + producto.toString();
        }
        console.log(`Orden: ${this._idOrden}, Productos: ${productosOrden}`);
        console.log(`Total: $${this.calcularTotal()}`);
    }

}


let producto1 = new Producto('Camisa', 100);
let producto2 = new Producto('Pantalón', 200);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Zapatos', 300);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();

