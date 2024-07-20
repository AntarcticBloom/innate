import { SortOrderInput } from "../inputs/SortOrderInput";
import { TableOrderByRelationAggregateInput } from "../inputs/TableOrderByRelationAggregateInput";
export declare class SchemaOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tracked?: SortOrderInput | undefined;
    baselineVersionOfSchema?: SortOrderInput | undefined;
    isNewestProductionVersion?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    tables?: TableOrderByRelationAggregateInput | undefined;
}
