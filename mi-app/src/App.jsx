// MISION 3 - REACTOR CORE / HUGO COBOS GUTIERREZ INSO3ºB

// Importando funciones de los componentes
import { useState } from 'react';
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { ListaPaises } from './components/ListaPaises';
import { Resultados } from './components/Resultados';
import { Aleatorio } from './components/Aleatorio';
import { Footer } from './components/Footer';
import { buscarComidas, buscarPorPais, obtenerComidaAleatoria } from './api.js';

export default function App() {
    // useState
    const [textoBusqueda, setTextoBusqueda] = useState(""); // Lo que el usuario escribe en el buscador
    const [listaComidas, setListaComidas] = useState([]); // Array con las comidas que devuelve la API
    const [mensaje, setMensaje] = useState(""); // Mensaje
    const [verResultados, setVerResultados] = useState(false); // Mostrar resultados (true) o paises (false)
    const [paisSeleccionado, setPaisSeleccionado] = useState(""); // Nombre del pais seleccionado

    // Cuando se escribe en el input
    const buscar = async (e) => {
        const texto = e.target.value;
        setTextoBusqueda(texto);
        const limpio = texto.trim();

        // Si el input esta vacio, volvemos a la normalidad
        if (limpio === "") {
            setVerResultados(false);
            setListaComidas([]);
            setMensaje("");
            return;
        }

        // Activamos la vista de resultados y mostramos mensaje de carga
        setVerResultados(true);
        setMensaje("Cargando comidas...");

        try {
            // Llamamos a la API para buscar comidas por nombre y contamos cuantas hay
            const comidas = await buscarComidas(limpio);
            const total = comidas.reduce((acc) => acc + 1, 0);
            
            setListaComidas(comidas);
            setMensaje("Comidas encontradas: " + total);
            setPaisSeleccionado("");
        } catch (error) { // En caso de error
            setMensaje("Error al cargar las comidas.");
        }
    };

    // Cuando se elije un pais
    const elegirPais = async (apiName, nombrePais) => {
        setVerResultados(true);
        setMensaje("Cargando comidas...");
        setPaisSeleccionado(apiName);

        try {
            // Llamamos a la API para buscar comidas por el pais y contamos cuantas hay
            const comidas = await buscarPorPais(apiName);
            const total = comidas.reduce((acc) => acc + 1, 0);

            setListaComidas(comidas);
            setMensaje("Comidas encontradas: " + total);
        } catch (error) {
            setMensaje("Error al cargar las comidas.");
        }
    };

    // Plato aleatorio
    const aleatorio = async () => {
        setVerResultados(true);
        setMensaje("Cargando comida aleatoria...");
        setPaisSeleccionado("");

        try {
            const comida = await obtenerComidaAleatoria();
            // Convertimos el objeto devuelto en un array de un solo elemento para que el map funcione
            setListaComidas(comida ? [comida] : []);
            setMensaje("");
        } catch (error) {
            setMensaje("Error al cargar la comida.");
        }
    };

    // Boton de volver al inicio
    const volver = () => {
        setVerResultados(false);
        setListaComidas([]);
        setMensaje("");
        setTextoBusqueda("");
        setPaisSeleccionado("");
    };

    return (
        <>
            <Header />
            <br />
            <main>
                {/* Buscador */}
                <Inicio 
                    buscadorValue={textoBusqueda} 
                    onBuscadorChange={buscar} 
                />

                {/* Mensaje */}
                <p id="mensaje">{mensaje}</p>

                <section id="comidas">
                    {/* Si verResultados es false, muestra la lista de paises */}
                    {!verResultados && (
                        <ListaPaises onSelectCountry={elegirPais} />
                    )}
                    {/* Si verResultados es true, muestra las comidas encontradas */}
                    {verResultados && (
                        <Resultados 
                            comidas={listaComidas} 
                            pais={paisSeleccionado} 
                            onVolver={volver} 
                        />
                    )}
                </section>

                {/* Boton de comida aleatoria */}
                <Aleatorio onAleatorioClick={aleatorio} />
            </main>
            <Footer />
        </>
    );
}