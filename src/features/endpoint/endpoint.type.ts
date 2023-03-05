export type ResponseWithPagination<T> = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    error?: string;
    results: T;
};