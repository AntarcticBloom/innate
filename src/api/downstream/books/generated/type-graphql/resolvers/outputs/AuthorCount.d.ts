import { AuthorCountBookAuthorsArgs } from "./args/AuthorCountBookAuthorsArgs";
export declare class AuthorCount {
    bookAuthors: number;
    getBookAuthors(root: AuthorCount, args: AuthorCountBookAuthorsArgs): number;
}
