import { BookOrderByWithAggregationInput } from "../../../inputs/BookOrderByWithAggregationInput";
import { BookScalarWhereWithAggregatesInput } from "../../../inputs/BookScalarWhereWithAggregatesInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
export declare class GroupByBookArgs {
    where?: BookWhereInput | undefined;
    orderBy?: BookOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt">;
    having?: BookScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
