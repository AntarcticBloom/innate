import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBookArgs } from "./args/DeleteManyBookArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBookResolver {
    deleteManyBook(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBookArgs): Promise<AffectedRowsOutput>;
}
