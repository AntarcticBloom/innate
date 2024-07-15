import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class SchemaScalarWhereWithAggregatesInput {
    AND?: SchemaScalarWhereWithAggregatesInput[] | undefined;
    OR?: SchemaScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SchemaScalarWhereWithAggregatesInput[] | undefined;
    id?: UuidWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    tracked?: BoolNullableWithAggregatesFilter | undefined;
    isNewestProductionVersion?: BoolNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
