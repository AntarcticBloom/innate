import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyRevokedRefreshTokenArgs } from "./args/UpdateManyRevokedRefreshTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRevokedRefreshTokenResolver {
    updateManyRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRevokedRefreshTokenArgs): Promise<AffectedRowsOutput>;
}
