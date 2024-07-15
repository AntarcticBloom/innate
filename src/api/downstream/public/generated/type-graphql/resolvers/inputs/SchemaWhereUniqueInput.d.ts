import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SchemaWhereInput } from "../inputs/SchemaWhereInput";
import { TableListRelationFilter } from "../inputs/TableListRelationFilter";
export declare class SchemaWhereUniqueInput {
    id?: string | undefined;
    name?: string | undefined;
    AND?: SchemaWhereInput[] | undefined;
    OR?: SchemaWhereInput[] | undefined;
    NOT?: SchemaWhereInput[] | undefined;
    tracked?: BoolNullableFilter | undefined;
    isNewestProductionVersion?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    tables?: TableListRelationFilter | undefined;
}
