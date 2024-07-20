import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FieldAnnotationWhereInput } from "../inputs/FieldAnnotationWhereInput";
import { FieldNullableRelationFilter } from "../inputs/FieldNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TableNullableRelationFilter } from "../inputs/TableNullableRelationFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class FieldAnnotationWhereUniqueInput {
    id?: string | undefined;
    AND?: FieldAnnotationWhereInput[] | undefined;
    OR?: FieldAnnotationWhereInput[] | undefined;
    NOT?: FieldAnnotationWhereInput[] | undefined;
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
