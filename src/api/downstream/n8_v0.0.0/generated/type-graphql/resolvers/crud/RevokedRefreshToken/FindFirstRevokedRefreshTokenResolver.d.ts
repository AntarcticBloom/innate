import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRevokedRefreshTokenArgs } from "./args/FindFirstRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class FindFirstRevokedRefreshTokenResolver {
    findFirstRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: FindFirstRevokedRefreshTokenArgs): Promise<RevokedRefreshToken | null>;
}
