import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class FieldAnnotationScalarWhereInput {
    AND?: FieldAnnotationScalarWhereInput[] | undefined;
    OR?: FieldAnnotationScalarWhereInput[] | undefined;
    NOT?: FieldAnnotationScalarWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    tableId?: UuidNullableFilter | undefined;
    modelName?: StringFilter | undefined;
    fieldId?: UuidNullableFilter | undefined;
    fieldName?: StringFilter | undefined;
    annotation?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
