import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class TableScalarWhereWithAggregatesInput {
    AND?: TableScalarWhereWithAggregatesInput[] | undefined;
    OR?: TableScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TableScalarWhereWithAggregatesInput[] | undefined;
    id?: UuidWithAggregatesFilter | undefined;
    schemaId?: UuidNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    modelName?: StringWithAggregatesFilter | undefined;
    relations?: JsonNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
