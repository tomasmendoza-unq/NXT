export interface Row<T> {
    id: number;
    data: T;
}

export interface TableResponseDTO<T> {
    headers: string[];
    rows: Row<T>[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}
