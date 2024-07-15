import { TableOrderByWithAggregationInput } from "../../../inputs/TableOrderByWithAggregationInput";
import { TableScalarWhereWithAggregatesInput } from "../../../inputs/TableScalarWhereWithAggregatesInput";
import { TableWhereInput } from "../../../inputs/TableWhereInput";
export declare class GroupByTableArgs {
    where?: TableWhereInput | undefined;
    orderBy?: TableOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "schemaId" | "name" | "modelName" | "relations" | "createdAt" | "updatedAt">;
    having?: TableScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
