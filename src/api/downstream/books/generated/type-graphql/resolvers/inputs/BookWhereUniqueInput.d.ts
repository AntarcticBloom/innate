import { BookAuthorListRelationFilter } from "../inputs/BookAuthorListRelationFilter";
import { BookWhereInput } from "../inputs/BookWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
export declare class BookWhereUniqueInput {
    id?: string | undefined;
    name?: string | undefined;
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    bookAuthors?: BookAuthorListRelationFilter | undefined;
}
