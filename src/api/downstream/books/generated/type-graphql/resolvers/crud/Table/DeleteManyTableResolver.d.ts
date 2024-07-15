import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTableArgs } from "./args/DeleteManyTableArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTableResolver {
    deleteManyTable(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTableArgs): Promise<AffectedRowsOutput>;
}
