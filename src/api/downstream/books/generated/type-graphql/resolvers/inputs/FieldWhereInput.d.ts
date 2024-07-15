import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FieldAnnotationListRelationFilter } from "../inputs/FieldAnnotationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TableNullableRelationFilter } from "../inputs/TableNullableRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class FieldWhereInput {
    AND?: FieldWhereInput[] | undefined;
    OR?: FieldWhereInput[] | undefined;
    NOT?: FieldWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    tableId?: UuidNullableFilter | undefined;
    name?: StringFilter | undefined;
    type?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    table?: TableNullableRelationFilter | undefined;
    fieldAnnotations?: FieldAnnotationListRelationFilter | undefined;
}
