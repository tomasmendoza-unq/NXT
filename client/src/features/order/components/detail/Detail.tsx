import { Link } from "react-router-dom";
import "./style/Detail.css";

export const Detail = ({ id, role }: { id: number; role: string }) => (
    <Link
        className="btn"
        to={`/${role}/orders/${id}`}
    >
        Ver detalle
    </Link>
);
