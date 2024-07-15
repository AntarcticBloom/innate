import { UuidFilter } from "../inputs/UuidFilter";
export declare class BookAuthorScalarWhereInput {
    AND?: BookAuthorScalarWhereInput[] | undefined;
    OR?: BookAuthorScalarWhereInput[] | undefined;
    NOT?: BookAuthorScalarWhereInput[] | undefined;
    bookId?: UuidFilter | undefined;
    authorId?: UuidFilter | undefined;
}
