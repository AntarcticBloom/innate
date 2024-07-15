import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAdministratorArgs } from "./args/CreateManyAdministratorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAdministratorResolver {
    createManyAdministrator(ctx: any, info: GraphQLResolveInfo, args: CreateManyAdministratorArgs): Promise<AffectedRowsOutput>;
}
