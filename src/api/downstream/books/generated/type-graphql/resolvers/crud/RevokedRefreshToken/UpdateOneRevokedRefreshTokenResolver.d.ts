import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneRevokedRefreshTokenArgs } from "./args/UpdateOneRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class UpdateOneRevokedRefreshTokenResolver {
    updateOneRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRevokedRefreshTokenArgs): Promise<RevokedRefreshToken | null>;
}
