import { FieldCountOrderByAggregateInput } from "../inputs/FieldCountOrderByAggregateInput";
import { FieldMaxOrderByAggregateInput } from "../inputs/FieldMaxOrderByAggregateInput";
import { FieldMinOrderByAggregateInput } from "../inputs/FieldMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FieldOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tableId?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: FieldCountOrderByAggregateInput | undefined;
    _max?: FieldMaxOrderByAggregateInput | undefined;
    _min?: FieldMinOrderByAggregateInput | undefined;
}
