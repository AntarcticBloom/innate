import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAdministratorArgs } from "./args/DeleteManyAdministratorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAdministratorResolver {
    deleteManyAdministrator(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAdministratorArgs): Promise<AffectedRowsOutput>;
}
