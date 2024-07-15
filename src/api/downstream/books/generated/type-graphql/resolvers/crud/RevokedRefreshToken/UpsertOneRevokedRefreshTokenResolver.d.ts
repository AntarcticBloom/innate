import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRevokedRefreshTokenArgs } from "./args/UpsertOneRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class UpsertOneRevokedRefreshTokenResolver {
    upsertOneRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRevokedRefreshTokenArgs): Promise<RevokedRefreshToken>;
}
