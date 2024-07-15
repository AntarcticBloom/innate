import { FieldOrderByWithAggregationInput } from "../../../inputs/FieldOrderByWithAggregationInput";
import { FieldScalarWhereWithAggregatesInput } from "../../../inputs/FieldScalarWhereWithAggregatesInput";
import { FieldWhereInput } from "../../../inputs/FieldWhereInput";
export declare class GroupByFieldArgs {
    where?: FieldWhereInput | undefined;
    orderBy?: FieldOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tableId" | "name" | "type" | "createdAt" | "updatedAt">;
    having?: FieldScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
