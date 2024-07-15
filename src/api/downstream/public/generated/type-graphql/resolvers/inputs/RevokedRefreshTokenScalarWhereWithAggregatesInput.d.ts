import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";
export declare class RevokedRefreshTokenScalarWhereWithAggregatesInput {
    AND?: RevokedRefreshTokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: RevokedRefreshTokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RevokedRefreshTokenScalarWhereWithAggregatesInput[] | undefined;
    id?: UuidWithAggregatesFilter | undefined;
    value?: StringWithAggregatesFilter | undefined;
    actualExpiration?: DateTimeWithAggregatesFilter | undefined;
}
