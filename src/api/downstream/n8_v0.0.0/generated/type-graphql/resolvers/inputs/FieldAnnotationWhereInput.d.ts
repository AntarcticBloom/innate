import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FieldNullableRelationFilter } from "../inputs/FieldNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TableNullableRelationFilter } from "../inputs/TableNullableRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class FieldAnnotationWhereInput {
    AND?: FieldAnnotationWhereInput[] | undefined;
    OR?: FieldAnnotationWhereInput[] | undefined;
    NOT?: FieldAnnotationWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    tableId?: UuidNullableFilter | undefined;
    modelName?: StringFilter | undefined;
    fieldId?: UuidNullableFilter | undefined;
    fieldName?: StringFilter | undefined;
    annotation?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    field?: FieldNullableRelationFilter | undefined;
    table?: TableNullableRelationFilter | undefined;
}
