import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { RevokedRefreshTokenWhereInput } from "../inputs/RevokedRefreshTokenWhereInput";
export declare class RevokedRefreshTokenWhereUniqueInput {
    id?: string | undefined;
    value?: string | undefined;
    AND?: RevokedRefreshTokenWhereInput[] | undefined;
    OR?: RevokedRefreshTokenWhereInput[] | undefined;
    NOT?: RevokedRefreshTokenWhereInput[] | undefined;
    actualExpiration?: DateTimeFilter | undefined;
}
