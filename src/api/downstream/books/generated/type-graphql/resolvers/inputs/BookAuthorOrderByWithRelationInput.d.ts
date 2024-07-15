import { AuthorOrderByWithRelationInput } from "../inputs/AuthorOrderByWithRelationInput";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
export declare class BookAuthorOrderByWithRelationInput {
    bookId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    author?: AuthorOrderByWithRelationInput | undefined;
    book?: BookOrderByWithRelationInput | undefined;
}
