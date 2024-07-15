import { BookAuthorListRelationFilter } from "../inputs/BookAuthorListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
export declare class BookWhereInput {
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    name?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    bookAuthors?: BookAuthorListRelationFilter | undefined;
}
