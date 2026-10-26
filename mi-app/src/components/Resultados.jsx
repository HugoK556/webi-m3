export function Resultados({ comidas, pais, onVolver }) {
    return (
        <section id="resultados">
            <button onClick={onVolver}>Volver a los paises</button>
            {comidas.length === 0 ? (
                <p>No se han encontrado comidas.</p>
            ) : (
                comidas.map((comida) => {
                    const area = comida.strArea || pais;
                    const categoria = comida.strCategory;
                    let textoDatos = "";

                    if (area && categoria) {
                        textoDatos = "País: " + area + " | Categoría: " + categoria;
                    } else if (area) {
                        textoDatos = "País: " + area;
                    } else if (categoria) {
                        textoDatos = "Categoría: " + categoria;
                    } else {
                        textoDatos = "No se sabe el pais ni la categoria";
                    }

                    return (
                        <article key={comida.idMeal} className="comida">
                            <h3>{comida.strMeal}</h3>
                            <img src={comida.strMealThumb} alt={comida.strMeal} />
                            <p className="datos-comida">{textoDatos}</p>
                        </article>
                    );
                })
            )}
        </section>
    );
}