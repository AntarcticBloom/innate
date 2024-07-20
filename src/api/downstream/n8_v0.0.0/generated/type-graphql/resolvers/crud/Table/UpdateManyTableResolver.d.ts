import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTableArgs } from "./args/UpdateManyTableArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTableResolver {
    updateManyTable(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTableArgs): Promise<AffectedRowsOutput>;
}
