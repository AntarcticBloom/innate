import { SchemaCountOrderByAggregateInput } from "../inputs/SchemaCountOrderByAggregateInput";
import { SchemaMaxOrderByAggregateInput } from "../inputs/SchemaMaxOrderByAggregateInput";
import { SchemaMinOrderByAggregateInput } from "../inputs/SchemaMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SchemaOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tracked?: SortOrderInput | undefined;
    isNewestProductionVersion?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SchemaCountOrderByAggregateInput | undefined;
    _max?: SchemaMaxOrderByAggregateInput | undefined;
    _min?: SchemaMinOrderByAggregateInput | undefined;
}
