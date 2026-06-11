import { Link } from "react-router-dom";
import "./style/Detail.css";

export const Detail = () => {
    return (
        <Link
            className="btn"
            to="/admin/orders/detail/1"
        >
            Ver detalle
        </Link>
    );
};
