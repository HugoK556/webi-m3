<!-- MISION 3 - REACTOR CORE / HUGO COBOS GUTIERREZ INSO3ºB -->
## Uso de IA
Al ser este proyecto mas facil ya que solo habia que replicar el anterior, solo he tenido que usar IA para el desarollo de App.jsx, ya que el index y css eran el mismo y los componentes son copias.

He dejado api.js tal cual ya que creo que no tengo que modificar ese archivo en un .jsx, solo los componentes.

El uso de IA ha venido principalmente a la hora de esto mimso, de comunicarme con la API.

Ejemplos de prompts reales:

* "como hago para poder tener el api.js pero usando App.jsx"
* "como vinculo las llamadas a la api desde api.js a App.jsx"

La mayor dificultad ha sido el App.jsx como he dicho porque el resto era practicamente o exactamente lo mismo.

## Autopsia
1. He dividido el codigo en los componentes que yo he visto mas claros en lugar de muchos pequeños o uno grande, mas o menos me he guiado por lo que serian las secciones.

2. Para mostrar las comidas devueltas por la API, he utilizado un bucle .map() asignando a cada tarjeta su key unica con el idMeal en lugar de hacerlo elemento a elemento.