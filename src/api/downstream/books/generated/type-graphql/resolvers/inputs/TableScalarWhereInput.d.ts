import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class TableScalarWhereInput {
    AND?: TableScalarWhereInput[] | undefined;
    OR?: TableScalarWhereInput[] | undefined;
    NOT?: TableScalarWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    schemaId?: UuidNullableFilter | undefined;
    name?: StringFilter | undefined;
    modelName?: StringFilter | undefined;
    relations?: JsonNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
