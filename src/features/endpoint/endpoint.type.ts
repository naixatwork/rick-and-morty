export type ResponseWithPagination<T> = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string | null;
    };
    error?: string;
    results: T;
};