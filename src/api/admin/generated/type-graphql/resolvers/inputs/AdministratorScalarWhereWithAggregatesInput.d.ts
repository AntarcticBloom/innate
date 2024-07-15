import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class AdministratorScalarWhereWithAggregatesInput {
    AND?: AdministratorScalarWhereWithAggregatesInput[] | undefined;
    OR?: AdministratorScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AdministratorScalarWhereWithAggregatesInput[] | undefined;
    id?: UuidWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    banned?: BoolNullableWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    verified?: BoolNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}