import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRevokedRefreshTokenArgs } from "./args/FindUniqueRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class FindUniqueRevokedRefreshTokenResolver {
    revokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRevokedRefreshTokenArgs): Promise<RevokedRefreshToken | null>;
}
