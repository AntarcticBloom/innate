import { SchemaOrderByWithAggregationInput } from "../../../inputs/SchemaOrderByWithAggregationInput";
import { SchemaScalarWhereWithAggregatesInput } from "../../../inputs/SchemaScalarWhereWithAggregatesInput";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";
export declare class GroupBySchemaArgs {
    where?: SchemaWhereInput | undefined;
    orderBy?: SchemaOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "tracked" | "baselineVersionOfSchema" | "isNewestProductionVersion" | "createdAt" | "updatedAt">;
    having?: SchemaScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
