import { BookAuthor } from "../models/BookAuthor";
import { AuthorCount } from "../resolvers/outputs/AuthorCount";
export declare class Author {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bookAuthors?: BookAuthor[];
    _count?: AuthorCount | null;
}
