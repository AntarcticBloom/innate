import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRevokedRefreshTokenArgs } from "./args/CreateOneRevokedRefreshTokenArgs";
import { RevokedRefreshToken } from "../../../models/RevokedRefreshToken";
export declare class CreateOneRevokedRefreshTokenResolver {
    createOneRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: CreateOneRevokedRefreshTokenArgs): Promise<RevokedRefreshToken>;
}
