import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
export declare class BookAuthorWhereInput {
    AND?: BookAuthorWhereInput[] | undefined;
    OR?: BookAuthorWhereInput[] | undefined;
    NOT?: BookAuthorWhereInput[] | undefined;
    bookId?: UuidFilter | undefined;
    authorId?: UuidFilter | undefined;
    author?: AuthorRelationFilter | undefined;
    book?: BookRelationFilter | undefined;
}
