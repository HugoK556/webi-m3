export function Inicio({ buscadorValue, onBuscadorChange }) {
    return (
        <section className="inicio">
            <label htmlFor="buscador">Buscar comida: </label>
            <input 
                id="buscador"
                value={buscadorValue}
                onChange={onBuscadorChange}
            />
        </section>
    );
}