import type { Page } from "./Page";

export interface TableColumn<T> {
    key: string;
    header: string;
    render: (item: T) => React.ReactNode;
}

export interface GenericTableProps<T> {
    page: Page<T>;
    columns: TableColumn<T>[];
    getRowKey: (item: T) => string | number;
    emptyMessage?: string;
    className?: string;
}
