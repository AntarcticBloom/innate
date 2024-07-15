import { BookAuthorOrderByWithAggregationInput } from "../../../inputs/BookAuthorOrderByWithAggregationInput";
import { BookAuthorScalarWhereWithAggregatesInput } from "../../../inputs/BookAuthorScalarWhereWithAggregatesInput";
import { BookAuthorWhereInput } from "../../../inputs/BookAuthorWhereInput";
export declare class GroupByBookAuthorArgs {
    where?: BookAuthorWhereInput | undefined;
    orderBy?: BookAuthorOrderByWithAggregationInput[] | undefined;
    by: Array<"bookId" | "authorId">;
    having?: BookAuthorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
