import type { GraphQLResolveInfo } from "graphql";
import { FindManyAdministratorArgs } from "./args/FindManyAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class FindManyAdministratorResolver {
    administrators(ctx: any, info: GraphQLResolveInfo, args: FindManyAdministratorArgs): Promise<Administrator[]>;
}
