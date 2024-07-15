import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyFieldArgs } from "./args/DeleteManyFieldArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFieldResolver {
    deleteManyField(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFieldArgs): Promise<AffectedRowsOutput>;
}
