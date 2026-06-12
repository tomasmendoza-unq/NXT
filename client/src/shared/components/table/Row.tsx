import type { Row } from "../../types/Table.t";
import type { ReactNode } from "react";
import "./style/Row.css";

export const TableRow = <T,>({
    row,
    children,
}: {
    row: Row<T>;
    children?: ReactNode;
}) => (
    <tr className="table-body-row">
        {Object.values(row.data as object).map((value, i) => (
            <td
                key={i}
                className="table-cell"
            >
                {String(value)}
            </td>
        ))}
        {children && <td className="table-cell">{children}</td>}
    </tr>
);
