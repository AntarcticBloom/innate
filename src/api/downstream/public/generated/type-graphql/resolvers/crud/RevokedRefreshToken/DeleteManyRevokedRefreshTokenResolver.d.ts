import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyRevokedRefreshTokenArgs } from "./args/DeleteManyRevokedRefreshTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRevokedRefreshTokenResolver {
    deleteManyRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRevokedRefreshTokenArgs): Promise<AffectedRowsOutput>;
}
