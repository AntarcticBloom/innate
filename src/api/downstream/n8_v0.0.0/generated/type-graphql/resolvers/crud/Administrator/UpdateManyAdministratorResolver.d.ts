import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAdministratorArgs } from "./args/UpdateManyAdministratorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAdministratorResolver {
    updateManyAdministrator(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAdministratorArgs): Promise<AffectedRowsOutput>;
}
