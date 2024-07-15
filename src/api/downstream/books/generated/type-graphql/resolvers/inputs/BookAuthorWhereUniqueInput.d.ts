import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { BookAuthorBookIdAuthorIdCompoundUniqueInput } from "../inputs/BookAuthorBookIdAuthorIdCompoundUniqueInput";
import { BookAuthorWhereInput } from "../inputs/BookAuthorWhereInput";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
export declare class BookAuthorWhereUniqueInput {
    bookId_authorId?: BookAuthorBookIdAuthorIdCompoundUniqueInput | undefined;
    AND?: BookAuthorWhereInput[] | undefined;
    OR?: BookAuthorWhereInput[] | undefined;
    NOT?: BookAuthorWhereInput[] | undefined;
    bookId?: UuidFilter | undefined;
    authorId?: UuidFilter | undefined;
    author?: AuthorRelationFilter | undefined;
    book?: BookRelationFilter | undefined;
}
