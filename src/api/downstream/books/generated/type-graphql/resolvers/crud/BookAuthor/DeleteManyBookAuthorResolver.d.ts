import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBookAuthorArgs } from "./args/DeleteManyBookAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBookAuthorResolver {
    deleteManyBookAuthor(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBookAuthorArgs): Promise<AffectedRowsOutput>;
}
