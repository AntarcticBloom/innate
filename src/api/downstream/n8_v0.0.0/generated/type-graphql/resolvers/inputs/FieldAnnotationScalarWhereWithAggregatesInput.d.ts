import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class FieldAnnotationScalarWhereWithAggregatesInput {
    AND?: FieldAnnotationScalarWhereWithAggregatesInput[] | undefined;
    OR?: FieldAnnotationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FieldAnnotationScalarWhereWithAggregatesInput[] | undefined;
    id?: UuidWithAggregatesFilter | undefined;
    tableId?: UuidNullableWithAggregatesFilter | undefined;
    modelName?: StringWithAggregatesFilter | undefined;
    fieldId?: UuidNullableWithAggregatesFilter | undefined;
    fieldName?: StringWithAggregatesFilter | undefined;
    annotation?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
