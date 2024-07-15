import { BookAuthorOrderByRelationAggregateInput } from "../inputs/BookAuthorOrderByRelationAggregateInput";
export declare class BookOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    bookAuthors?: BookAuthorOrderByRelationAggregateInput | undefined;
}
