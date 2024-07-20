import type { GraphQLResolveInfo } from "graphql";
import { FindManyRevokedRefreshTokenArgs } from "./args/FindManyRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class FindManyRevokedRefreshTokenResolver {
    revokedRefreshTokens(ctx: any, info: GraphQLResolveInfo, args: FindManyRevokedRefreshTokenArgs): Promise<RevokedRefreshToken[]>;
}
