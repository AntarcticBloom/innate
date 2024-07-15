import { FieldAnnotationOrderByRelationAggregateInput } from "../inputs/FieldAnnotationOrderByRelationAggregateInput";
import { FieldOrderByRelationAggregateInput } from "../inputs/FieldOrderByRelationAggregateInput";
import { SchemaOrderByWithRelationInput } from "../inputs/SchemaOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class TableOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    schemaId?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    modelName?: "asc" | "desc" | undefined;
    relations?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    fields?: FieldOrderByRelationAggregateInput | undefined;
    fieldAnnotations?: FieldAnnotationOrderByRelationAggregateInput | undefined;
    schema?: SchemaOrderByWithRelationInput | undefined;
}
