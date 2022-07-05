# Marvel App

Aplicación desarrollada en React Native a modo de prueba de nivel voluntaria para el proceso de seleccion de CaixaBank Tech.

## Estructura del código

A la hora de estructurar el código, lo que he hecho ha sido separar el servicio en sí, a través del cual se implementa la comunicación con [el api de Marvel](https://developer.marvel.com/docs), de la funcionalidad de la aplicación. De tal forma que en el hipotético caso de que la aplicación fuera aumentando sus funcionalidades y las peticiones al api, la parte del servicio se podría abstraer en una librería externa e independiente del propio código de la aplicación.

En cuanto a la parte del servicio, mencionar también que los parámetros necesarios para autenticarse con el api que expone esta web de Marvel, no los acepta en las headres como sería mejor, de ahí que tanto el apiKey como el hash, vayan añadidos en las peticiones GET.

Por último, en lo que al código de la aplicación se refiere, he decidio estructurarlo en funcionalidades. En este caso sólo está la funcionalidad de los "heroes", pero tratando de hacer una analogía con la aplicación de CaixaBank, esta se podría tb estructurar por funcionalidades o features (préstamos, hipotecas, tarjetas...). Por lo que dentro de cada feature incluría la subcarpeta screen (o page, o view), components, etc, tratando de que estos componentes fueran siempre lo más reutilizables posibles dentro del resto de la aplicación.

## Control de Versiones

Con el objetivo de poder mostrar un progreso claro de los pasos dados para desarrollar la aplicación, he dejado visibles las ramas y sus commits tras los merge con la rama master. Sin embargo, a mí particularmente, me gusta mucho más la opción de mergear con *squash commit*, integrando todos los commits realizados en una rama en uno solo que resuma (que titule) el desarrollo que se haya llevado a cabo.

## Idea de la aplicación

La idea de hacer esta app, está sacada de otro proceso de selección anterior en el que una empresa me pidió que hiciera una pequeña aplicación. Esta aplicación, consistía en implementar un listado de heroes recuperados del api antes mencionado y mostrar una página de detalle al pulsar sobre un heroe de la lista, dejando a la elección del candidato la forma de desarrollar dicha solución, diseño y estructura del código.