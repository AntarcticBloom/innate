import { RevokedRefreshTokenOrderByWithAggregationInput } from "../../../inputs/RevokedRefreshTokenOrderByWithAggregationInput";
import { RevokedRefreshTokenScalarWhereWithAggregatesInput } from "../../../inputs/RevokedRefreshTokenScalarWhereWithAggregatesInput";
import { RevokedRefreshTokenWhereInput } from "../../../inputs/RevokedRefreshTokenWhereInput";
export declare class GroupByRevokedRefreshTokenArgs {
    where?: RevokedRefreshTokenWhereInput | undefined;
    orderBy?: RevokedRefreshTokenOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "value" | "actualExpiration">;
    having?: RevokedRefreshTokenScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
