import { Author } from "../models/Author";
import { Book } from "../models/Book";
export declare class BookAuthor {
    bookId: string;
    authorId: string;
    author?: Author;
    book?: Book;
}
