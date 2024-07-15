import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBookArgs } from "./args/UpdateManyBookArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBookResolver {
    updateManyBook(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBookArgs): Promise<AffectedRowsOutput>;
}
