import { Link } from "react-router-dom";
import "./style/Detail.css";

export const Detail = ({ id }: { id: number }) => (
    <Link
        className="btn"
        to={`/admin/orders/detail/${id}`}
    >
        Ver detalle
    </Link>
);
