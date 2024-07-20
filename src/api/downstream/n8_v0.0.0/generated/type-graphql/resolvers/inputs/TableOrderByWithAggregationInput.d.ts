import { SortOrderInput } from "../inputs/SortOrderInput";
import { TableCountOrderByAggregateInput } from "../inputs/TableCountOrderByAggregateInput";
import { TableMaxOrderByAggregateInput } from "../inputs/TableMaxOrderByAggregateInput";
import { TableMinOrderByAggregateInput } from "../inputs/TableMinOrderByAggregateInput";
export declare class TableOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    schemaId?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    modelName?: "asc" | "desc" | undefined;
    relations?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TableCountOrderByAggregateInput | undefined;
    _max?: TableMaxOrderByAggregateInput | undefined;
    _min?: TableMinOrderByAggregateInput | undefined;
}
