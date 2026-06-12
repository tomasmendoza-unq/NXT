import type { Table } from "../types/Table.t";
import type { TableResponseDTO } from "../../core/api/types/TableResponseDTO.t";

export const toTable = <TDTO, TModel>(
    dto: TableResponseDTO<TDTO>,
    toModel: (item: TDTO) => TModel,
): Table<TModel> => ({
    headers: dto.headers,
    rows: dto.rows.map((row) => ({
        id: row.id,
        data: toModel(row.data),
    })),
    page: dto.page,
    size: dto.size,
    totalElements: dto.totalElements,
    totalPages: dto.totalPages,
    last: dto.last,
});
