import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRevokedRefreshTokenArgs } from "./args/DeleteOneRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class DeleteOneRevokedRefreshTokenResolver {
    deleteOneRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRevokedRefreshTokenArgs): Promise<RevokedRefreshToken | null>;
}
