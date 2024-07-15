import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class BookAuthorScalarWhereWithAggregatesInput {
    AND?: BookAuthorScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookAuthorScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookAuthorScalarWhereWithAggregatesInput[] | undefined;
    bookId?: UuidWithAggregatesFilter | undefined;
    authorId?: UuidWithAggregatesFilter | undefined;
}
