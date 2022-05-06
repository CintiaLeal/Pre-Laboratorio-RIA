# Pre-Laboratorio RIA 2022
## Integrantes: 
-Leandro Marrero <br>
-Cintia Leal <br>
## Objetivo: <br>
El objetivo del laboratorio es poner en práctica y profundizar mediante la investigación los temas vistos a lo
largo de los teóricos del curso. Al finalizar este trabajo, los estudiantes deberán ser capaces de comprender
conceptos básicos de HTML, CSS, Typescript y Angular.
![angular css html](https://user-images.githubusercontent.com/66495366/167154238-d3447e92-614f-4c0d-a728-990a4f1f5ee3.png)
## Problema: <br>
Una empresa de venta de comidas requiere registrar algunos datos de su negocio para poder gestionar de
mejor manera el mismo. En un inicio se comenzará con un prototipo y datos muy básicos. En este prototipo
no se dispondrá de un back-end, por tanto, el almacenamiento de datos y lógica de negocios se simulará
dentro de servicios, ya sea guardando las colecciones en el storage del navegador o directamente
propiedades del tipo arrays de los servicios.
Los datos que se desean almacenar serán los siguientes:
### Clientes
- Documento
- Nombre
- Apellido
- Fecha de Nacimiento
- Dirección
- Teléfono
### Productos
- Nombre
- Descripción
- Precio
- Imagen
### Ventas
- Fecha
- Cliente
- Producto <br>

Cada entidad deberá tener además un Id auto incremental que en el caso del prototipo también se debe
manejar a nivel del servicio.

## ¿Qué resultado se espera?
Se espera que se implemente una aplicación Angular para la gestión de las entidades mencionadas en el
punto anterior. Considerando que es un prototipo, no se requiere autenticación. Algunos puntos a tener en
cuenta:
- En primer lugar, pensar en la organización desde el punto de vista visual de la aplicación, es decir, que
pantallas tendrá y cómo se verán. A partir de ello, definir los flujos de navegación, considerar que debe
haber un menú principal con las opciones de punto de partida para utilizar los formularios de
mantenimiento de datos.
- NO utilizar un framework CSS. Si bien lógicamente lo natural sería utilizar un framework de este tipo
(como Bootstrap, Material, etc.) en este caso, considerando que el objetivo es que los estudiantes
tengan una introducción a CSS, se solicita definir estilos propios para los distintos elementos.
Considerar las nociones vistas en el teórico.
- Considerar el uso de buenas prácticas como el feedback al usuario, visualización en dispositivos
móviles, etc.
- Todo el código desde el inicio debe estar en un repositorio git y los avances de cada integrante del
grupo deben quedar individualmente registrados con los commits, es decir, NO se acepta que se
pasen el código entre los integrantes del equipo y uno lo suba al repositorio.
