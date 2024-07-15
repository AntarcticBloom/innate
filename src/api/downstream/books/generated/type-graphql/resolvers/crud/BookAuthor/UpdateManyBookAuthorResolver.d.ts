import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBookAuthorArgs } from "./args/UpdateManyBookAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBookAuthorResolver {
    updateManyBookAuthor(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBookAuthorArgs): Promise<AffectedRowsOutput>;
}
