import type { GraphQLResolveInfo } from "graphql";
import { CreateManyRevokedRefreshTokenArgs } from "./args/CreateManyRevokedRefreshTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRevokedRefreshTokenResolver {
    createManyRevokedRefreshToken(ctx: any, info: GraphQLResolveInfo, args: CreateManyRevokedRefreshTokenArgs): Promise<AffectedRowsOutput>;
}
