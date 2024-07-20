import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyFieldArgs } from "./args/UpdateManyFieldArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFieldResolver {
    updateManyField(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFieldArgs): Promise<AffectedRowsOutput>;
}
