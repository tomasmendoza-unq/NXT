export interface Row<T> {
    id: number;
    data: T;
}

export interface Table<T> {
    headers: string[];
    rows: Row<T>[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}

export const emptyTable = <T>(): Table<T> => ({
    headers: [],
    rows: [],
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
    last: true,
});
