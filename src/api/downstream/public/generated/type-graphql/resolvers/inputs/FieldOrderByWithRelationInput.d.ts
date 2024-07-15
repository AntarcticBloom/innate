import { FieldAnnotationOrderByRelationAggregateInput } from "../inputs/FieldAnnotationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TableOrderByWithRelationInput } from "../inputs/TableOrderByWithRelationInput";
export declare class FieldOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    tableId?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    table?: TableOrderByWithRelationInput | undefined;
    fieldAnnotations?: FieldAnnotationOrderByRelationAggregateInput | undefined;
}
