import { AuthorOrderByWithAggregationInput } from "../../../inputs/AuthorOrderByWithAggregationInput";
import { AuthorScalarWhereWithAggregatesInput } from "../../../inputs/AuthorScalarWhereWithAggregatesInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
export declare class GroupByAuthorArgs {
    where?: AuthorWhereInput | undefined;
    orderBy?: AuthorOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt">;
    having?: AuthorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
