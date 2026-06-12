import type { Table, Row } from "../../types/Table.t";
import { TableRow } from "./Row";
import type { ReactNode } from "react";
import "./style/Table.css";

export const TableGeneric = <T,>({
    table,
    emptyMessage = "No hay datos para mostrar.",
    className,
    childrenRow,
}: {
    table: Table<T>;
    emptyMessage?: string;
    className?: string;
    childrenRow?: (row: Row<T>) => ReactNode;
}) => {
    if (table.rows.length === 0)
        return (
            <p className="text-center text-gray-500 py-12">{emptyMessage}</p>
        );

    return (
        <div className={`table-wrapper ${className || ""}`}>
            <table className="table">
                <thead className="table-head">
                    <tr>
                        {table.headers.map((header) => (
                            <th
                                key={header}
                                className="table-header"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table.rows.map((row) => (
                        <TableRow
                            key={row.id}
                            row={row}
                        >
                            {childrenRow?.(row)}
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
