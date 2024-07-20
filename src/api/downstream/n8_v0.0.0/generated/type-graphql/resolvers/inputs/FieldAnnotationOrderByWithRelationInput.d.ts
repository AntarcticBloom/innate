import { FieldOrderByWithRelationInput } from "../inputs/FieldOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TableOrderByWithRelationInput } from "../inputs/TableOrderByWithRelationInput";
export declare class FieldAnnotationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    tableId?: SortOrderInput | undefined;
    modelName?: "asc" | "desc" | undefined;
    fieldId?: SortOrderInput | undefined;
    fieldName?: "asc" | "desc" | undefined;
    annotation?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    field?: FieldOrderByWithRelationInput | undefined;
    table?: TableOrderByWithRelationInput | undefined;
}
