import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
export declare class RevokedRefreshTokenWhereInput {
    AND?: RevokedRefreshTokenWhereInput[] | undefined;
    OR?: RevokedRefreshTokenWhereInput[] | undefined;
    NOT?: RevokedRefreshTokenWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    value?: StringFilter | undefined;
    actualExpiration?: DateTimeFilter | undefined;
}
