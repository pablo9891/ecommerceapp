# E-commerce - Proyecto React Coderhouse
* Alumno: Pablo Pellecchia
* Año: 2022
* Comisión: 34750 Lu - Mi

## Como iniciar el proyecto
Para ejecutar el proyecto se debe ejecutar el comando:

### `npm run start`

## Navegabilidad
La pantalla de `home` muestra los productos disponibles. Seleccionando en el que se está interesado se puede observar el detalle del producto. En donde, se observa el stock para determinado producto. No se puede agregar un producto al carrito si no hay stock del mismo. 

Una vez que se agrega un producto al carrito, se puede seleccionar otro producto o se puede acceder directamente al carrito (cart). 

En la pantalla de carrito, se puede observar todos los productos seleccionados, junto con la cantidad. Allí se pueden eliminar productos del carrito o eliminar la totalidad del carrito. 

Si se confirma el carrito, se pasa a la pantalla de carga de datos del cliente, en donde se cargan los datos de la orden. Si se confirman los datos se pasa al checkout de la compra, en donde se genera la compra.

## Componentes
Los componentes principales identificados han sido:

### Navbar
Muestra las categorías de los productos disponibles. Compuesto por el `NavbarHeader` que muestra el titulo y el `NavbarItems` que muestra las categorías.

### ItemListContainer
Compuesto por `ItemList` que muestran la lista de productos, donde cada producto esta representado por un `Item` que se encuentran linkeados con un `ItemDetailContainer`

### ItemDetailContainer
Guarda los datos detallados de un producto, como por ejemplo su stock, nombre, etc. Está compuesto por `ItemCounter` el cual realiza el conteo de la cantidad de productos que se desean. Si no hay stock del producto, el `ItemCounter` se encuentra deshabilitado. Cuando se realiza la compra del producto, se muestra una notificación, utilizando el componente de `Notification`, mostrando que el producto fue agregado al carrito exitosamente.

### Cart
Se muestran todos los productos agregados al carrito. Dandose la opción de borrar todos los productos, si se hace esto se eliminan todos los productos y se da la opción de volver a la `home` de la tienda. Si se confirma se pasa a la pantalla de `CartForm`

### CartForm
Se realiza la carga de datos del usuario para poder generar la compra. Todos los datos se validan y si no son válidos se muestran notificaciones de error. Si son correctos, se pasa al `checkout` del producto

### Checkout
Es en donde se termina de confirmar la compra, junto con los datos del usuario, total y productos de la compra. Si no se confirma, se vuelve a la pantalla de `Cart` para revisar la compra.

# Passwords y Pérmisos
Los mismos se encuentran en un archivo .env, el cual no ha sido compartido en el repositorio de Github por contener información sensible de conexiones a bases de datos.