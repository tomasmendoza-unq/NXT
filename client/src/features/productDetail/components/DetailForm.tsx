export const DetailForm = () => {
    return (
        <form>
            <label htmlFor="detail-name">Nombre del detalle:</label>
            <input
                type="text"
                id="detail-name"
                name="name"
            />
            <label htmlFor="detail-description">Descripción del detalle:</label>
            <input
                type="text"
                id="detail-description"
                name="description"
            />
        </form>
    );
};
