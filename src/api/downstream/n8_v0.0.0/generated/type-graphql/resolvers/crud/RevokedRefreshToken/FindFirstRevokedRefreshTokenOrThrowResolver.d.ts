import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRevokedRefreshTokenOrThrowArgs } from "./args/FindFirstRevokedRefreshTokenOrThrowArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class FindFirstRevokedRefreshTokenOrThrowResolver {
    findFirstRevokedRefreshTokenOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRevokedRefreshTokenOrThrowArgs): Promise<RevokedRefreshToken | null>;
}
