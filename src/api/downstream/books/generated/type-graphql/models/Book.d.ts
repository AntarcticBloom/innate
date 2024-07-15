import { BookAuthor } from "../models/BookAuthor";
import { BookCount } from "../resolvers/outputs/BookCount";
export declare class Book {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    bookAuthors?: BookAuthor[];
    _count?: BookCount | null;
}
