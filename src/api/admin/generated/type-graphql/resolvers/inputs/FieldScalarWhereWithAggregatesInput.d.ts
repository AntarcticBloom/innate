import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class FieldScalarWhereWithAggregatesInput {
    AND?: FieldScalarWhereWithAggregatesInput[] | undefined;
    OR?: FieldScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FieldScalarWhereWithAggregatesInput[] | undefined;
    id?: UuidWithAggregatesFilter | undefined;
    tableId?: UuidNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
