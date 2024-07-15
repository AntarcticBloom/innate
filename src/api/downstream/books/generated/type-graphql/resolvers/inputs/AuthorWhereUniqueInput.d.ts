import { AuthorWhereInput } from "../inputs/AuthorWhereInput";
import { BookAuthorListRelationFilter } from "../inputs/BookAuthorListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
export declare class AuthorWhereUniqueInput {
    id?: string | undefined;
    name?: string | undefined;
    AND?: AuthorWhereInput[] | undefined;
    OR?: AuthorWhereInput[] | undefined;
    NOT?: AuthorWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    bookAuthors?: BookAuthorListRelationFilter | undefined;
}
