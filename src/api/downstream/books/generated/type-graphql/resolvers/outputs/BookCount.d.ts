import { BookCountBookAuthorsArgs } from "./args/BookCountBookAuthorsArgs";
export declare class BookCount {
    bookAuthors: number;
    getBookAuthors(root: BookCount, args: BookCountBookAuthorsArgs): number;
}
