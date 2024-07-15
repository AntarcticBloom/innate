import { FieldAnnotationCountOrderByAggregateInput } from "../inputs/FieldAnnotationCountOrderByAggregateInput";
import { FieldAnnotationMaxOrderByAggregateInput } from "../inputs/FieldAnnotationMaxOrderByAggregateInput";
import { FieldAnnotationMinOrderByAggregateInput } from "../inputs/FieldAnnotationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FieldAnnotationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tableId?: SortOrderInput | undefined;
    modelName?: "asc" | "desc" | undefined;
    fieldId?: SortOrderInput | undefined;
    fieldName?: "asc" | "desc" | undefined;
    annotation?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: FieldAnnotationCountOrderByAggregateInput | undefined;
    _max?: FieldAnnotationMaxOrderByAggregateInput | undefined;
    _min?: FieldAnnotationMinOrderByAggregateInput | undefined;
}
