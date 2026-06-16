export const ColorForm = () => {
    return (
        <form>
            <label htmlFor="color-name">Nombre del color:</label>
            <input
                type="text"
                id="color-name"
                name="name"
            />
            <label htmlFor="color-hex">Código hexadecimal:</label>
            <input
                type="text"
                id="color-hex"
                name="hex"
            />
        </form>
    );
};
