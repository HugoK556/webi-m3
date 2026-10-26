// MISION 3 - REACTOR CORE / HUGO COBOS GUTIERREZ INSO3ºB
// MISMO CODIGO QUE EL DE LA MISION 2 

// Esquema de la API, const, no se puede modificar
const API = "https://www.themealdb.com/api/json/v1/1";

// Funcion para pedir datos a la API, ademas, añade una caché en localStorage para no repetir peticiones ya hechas.
async function pedirDatos(url) {
    try {
        const aleatoria = url.includes("/random.php"); // Comprueba si es una peticion aleatoria

        const guardado = aleatoria ? null : localStorage.getItem(url); // Busca los datos guardados si no es una peticion aleatoria

        // Si existen datos guardados los retorno
        if (guardado) {
            return JSON.parse(guardado);
        }

        // Peticion a la API
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error al obtener los datos");
        }

        const datos = await respuesta.json();

        // Guarda los datos obtenidos, menos las comidas aleatorias, para que no salga siempre la misma
        if (!aleatoria) {
            localStorage.setItem(url, JSON.stringify(datos));
        }

        return datos;

    } catch (error) {
        console.error("Error al conectar con la API:", error.message);
        throw error;
    }
}

// Busca comidas por nombre
export async function buscarComidas(nombre) {
    const datos = await pedirDatos( `${API}/search.php?s=${encodeURIComponent(nombre)}`); // encodeURIComponent sirve para comvertir texto a formato valido de url
    return datos.meals || []; // Si no hay comidas devuelve una lista vacia
}

// Busca comidas por pais
export async function buscarPorPais(pais) {
    const datos = await pedirDatos(`${API}/filter.php?a=${encodeURIComponent(pais)}`);

    const comidas = datos.meals || [];

    // Obtiene los detalles de cada comida para conseguir su categoria
    const detalles = await Promise.all( // Espera a que terminen todas las peticiones de detalles
        comidas.map(async function (comida) { // Recorre todas las comidas con map llamando a la funcion obtenerDetalles pasandole el id
            return await obtenerDetalles(comida.idMeal);
        })
    );

    // Devuelve solo las comidas correctas
    return detalles.filter(function (comida) {
        return comida !== null;
    });
}

// Obtiene los detalles de una comida por su id
export async function obtenerDetalles(id) {
    const datos = await pedirDatos(`${API}/lookup.php?i=${encodeURIComponent(id)}`);
    return datos.meals ? datos.meals[0] : null; // Devuelve el primer elemento si existe, sino, null
}

// Obtiene una comida aleatoria
export async function obtenerComidaAleatoria() {
    const datos = await pedirDatos(`${API}/random.php`);
    return datos.meals ? datos.meals[0] : null;
}