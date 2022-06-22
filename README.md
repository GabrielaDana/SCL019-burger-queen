#  Burger Queen 🌱 Vurger Queen
## Índice

* [1. Descripción](#1-Descripción)
* [2. Vurger Queen](#2-Vurger-Queen)
* [3. Definición del producto](#3-definición-del-producto)
* [4. Diseño y organización](#4-Diseño-y-organización)
* [5. Despliegue](#5-Despliegue)

***

## 1. Descripción

Vurger queen es una interfaz web SPA y responsive, para tomar pedidos en un restaurante ficticio de comida rápida, a través de una tablet, con el objetivo de enviar cada pedido a la cocina de manera ordenada y eficiente para su preparación. 

Esta interfaz está enfocada en dos tipos de usuarios: 

#### Mesero/a para **tomar pedido** cubriendo la interacción con los clientes del restaurante:

* Se solicita nombre del cliente y número de mesa.
* Se muestran dos menús: uno para el desayuno y otro para almuerzo/cena. Dependiendo de la selección se despliegan las opciones de manera dinámica, trayendo la data de cada menú desde **firestore**.
* Se agregan productos al pedido seleccionando el item y la cantidad.
* En el submenú de hamburguesas se puede seleccionar tamaño, ingrediente y extras. Es decir el item que se agrega está compuesto por varias opciones. 
* Se puede editar la cantidad asociada al item una vez agregado al pedido, sumando o restando.
* Se pueden eliminar productos directamente con el botón **x**.
* Se pueden eliminar productos editando su cantidad hasta llegar a 0.
* Se pueden agregar nuevamente productos que ya están en el pedido, lo que hará que aumente la cantidad sin duplicarse el item en el resumen.
* El resumen muestra todos los item del pedido y el subtotal de cada uno.
* Se muestra el total del pedido.
* Una vez listo el pedido se envía a cocina.

#### Jefe/a de **cocina** para organizar la preparación de cada pedido con el personal de cocina:

* Se muestran los pedidos más recientes primero.
* Los pedidos quedan guardado en la base de datos **firestore**.
* Cada pedido muestra el nombre del cliente y la mesa, además de un status *"Pendiente"*.
* Cuando el jefe de cocina manda a preparar el pedido este cambia su status a *"En preparación"*.
* Cuando el pedido está listo, se cambia su status a *"Listo para entregar"*, lo que hace que desaparezca de la pantalla, para así enfocarse en los otros pedidos que aún no están listos.
* En la parte superior de la pantalla se muestran estadísticas de los pedidos *pendientes* y *en preparación*, para hacer un mejor seguimiento.

### Lenguajes y dominios técnicos:

* Javascript
* css
* html
* Framework: React
* Base de datos: Firebase/Firestore
* Despliegue en firebase hosting
* Diseño orientado a usuario

## 2. Vurger Queen

Un pequeño restaurante de hamburguesas vegetarianas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

Para crear la interfaz se obtienen los siguientes datos: 
> Somos **Vurguer Queen**, una cadena de comida vegetariana.
>
> Nuestra propuesta de servicio ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
> 
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> el su pedido varias veces antes de finalizarlo.
>
>La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
>con todos sus productos. El usuario debe poder ir eligiendo qué productos
>agregar y la interfaz debe ir mostrando el resumen del pedido con el
>costo total.

## 3. Definición del producto

La definición del producto está a cargo de un Product Owner que entrega un backlog con 3 historias de usuario a desarrollar:

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

## 4. Diseño

El prototipo fue realizado en figma con iteración de logo y colores:

![prototipado](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/Prototipos.png)

Capturas de la aplicación desplegada y funcionando en formato tablet 11":

*Home:*

![home vertical](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/home_vertical.png)
![home horizontal](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/home_horizontal.png)


*Vista para tomar pedido*

![tomar pedido vertical](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/tomar_pedido_vertical.png)
![tomar pedido horizontal](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/tomar_pedido_horizontal.png)


*Vista de cocina*

![cocina vertical](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/Cocina_vertical.png)
![cocina horizontal](https://github.com/GabrielaDana/SCL019-burger-queen/blob/main/img_readme/cocina_horizontal.png)

## 5. Despliegue

El despliegue se realizó en firebase hosting, aprovechando que la aplicación está enlazada a firebase:

🔗 [*Vurger Queen*](https://burger-queen-gabriela-dana.web.app/)

 
