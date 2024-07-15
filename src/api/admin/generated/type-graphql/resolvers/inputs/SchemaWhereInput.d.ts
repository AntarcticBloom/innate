import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TableListRelationFilter } from "../inputs/TableListRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";
export declare class SchemaWhereInput {
    AND?: SchemaWhereInput[] | undefined;
    OR?: SchemaWhereInput[] | undefined;
    NOT?: SchemaWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    name?: StringFilter | undefined;
    tracked?: BoolNullableFilter | undefined;
    isNewestProductionVersion?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    tables?: TableListRelationFilter | undefined;
}
