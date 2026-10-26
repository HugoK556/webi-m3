export function ListaPaises({ onSelectCountry }) {
    return (
        <section id="lista-comidas" className="comidas">
            <article className="comida">
                <h3>España</h3>
                <img src="src/img/1.png" alt="España" />
                <button className="recetas" onClick={() => onSelectCountry("Spanish", "España")}>Recetas</button>
            </article>
            
            <article className="comida">
                <h3>Italia</h3>
                <img src="src/img/2.webp" alt="Italia" />
                <button className="recetas" onClick={() => onSelectCountry("Italian", "Italia")}>Recetas</button>
            </article>

            <article className="comida">
                <h3>Japon</h3>
                <img src="src/img/3.webp" alt="Japon" />
                <button className="recetas" onClick={() => onSelectCountry("Japanese", "Japon")}>Recetas</button>
            </article>

            <article className="comida">
                <h3>China</h3>
                <img src="src/img/4.webp" alt="China" />
                <button className="recetas" onClick={() => onSelectCountry("Chinese", "China")}>Recetas</button>
            </article>

            <article className="comida">
                <h3>Peru</h3>
                <img src="src/img/5.png" alt="Peru" />
                <button className="recetas" onClick={() => onSelectCountry("Peruvian", "Peru")}>Recetas</button>
            </article>

            <article className="comida">
                <h3>Vietnam</h3>
                <img src="src/img/6.webp" alt="Vietnam" />
                <button className="recetas" onClick={() => onSelectCountry("Vietnamese", "Vietnam")}>Recetas</button>
            </article>
        </section>
    );
}