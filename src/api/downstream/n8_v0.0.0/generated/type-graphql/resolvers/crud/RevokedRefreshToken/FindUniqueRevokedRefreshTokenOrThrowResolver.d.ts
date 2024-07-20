import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRevokedRefreshTokenOrThrowArgs } from "./args/FindUniqueRevokedRefreshTokenOrThrowArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class FindUniqueRevokedRefreshTokenOrThrowResolver {
    getRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRevokedRefreshTokenOrThrowArgs): Promise<RevokedRefreshToken | null>;
}
