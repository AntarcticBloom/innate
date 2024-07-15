import type { GraphQLResolveInfo } from "graphql";
import { AggregateRevokedRefreshTokenArgs } from "./args/AggregateRevokedRefreshTokenArgs";
import { AggregateRevokedRefreshToken } from "../../outputs/AggregateRevokedRefreshToken";
export declare class AggregateRevokedRefreshTokenResolver {
    aggregateRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: AggregateRevokedRefreshTokenArgs): Promise<AggregateRevokedRefreshToken>;
}
