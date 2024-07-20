import type { GraphQLResolveInfo } from "graphql";
import { GroupByRevokedRefreshTokenArgs } from "./args/GroupByRevokedRefreshTokenArgs";
import { RevokedRefreshTokenGroupBy } from "../../outputs/RevokedRefreshTokenGroupBy";
export declare class GroupByRevokedRefreshTokenResolver {
    groupByRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: GroupByRevokedRefreshTokenArgs): Promise<RevokedRefreshTokenGroupBy[]>;
}
