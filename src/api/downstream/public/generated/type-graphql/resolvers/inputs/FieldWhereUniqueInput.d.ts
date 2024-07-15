import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FieldAnnotationListRelationFilter } from "../inputs/FieldAnnotationListRelationFilter";
import { FieldWhereInput } from "../inputs/FieldWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TableNullableRelationFilter } from "../inputs/TableNullableRelationFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class FieldWhereUniqueInput {
    id?: string | undefined;
    AND?: FieldWhereInput[] | undefined;
    OR?: FieldWhereInput[] | undefined;
    NOT?: FieldWhereInput[] | undefined;
    tableId?: UuidNullableFilter | undefined;
    name?: StringFilter | undefined;
    type?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    table?: TableNullableRelationFilter | undefined;
    fieldAnnotations?: FieldAnnotationListRelationFilter | undefined;
}
