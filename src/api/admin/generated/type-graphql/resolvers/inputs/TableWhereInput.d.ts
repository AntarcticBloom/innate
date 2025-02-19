import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FieldAnnotationListRelationFilter } from "../inputs/FieldAnnotationListRelationFilter";
import { FieldListRelationFilter } from "../inputs/FieldListRelationFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { SchemaNullableRelationFilter } from "../inputs/SchemaNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class TableWhereInput {
    AND?: TableWhereInput[] | undefined;
    OR?: TableWhereInput[] | undefined;
    NOT?: TableWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    schemaId?: UuidNullableFilter | undefined;
    name?: StringFilter | undefined;
    modelName?: StringFilter | undefined;
    relations?: JsonNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    fields?: FieldListRelationFilter | undefined;
    fieldAnnotations?: FieldAnnotationListRelationFilter | undefined;
    schema?: SchemaNullableRelationFilter | undefined;
}
