import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAdministratorArgs } from "./args/FindFirstAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class FindFirstAdministratorResolver {
    findFirstAdministrator(ctx: any, info: GraphQLResolveInfo, args: FindFirstAdministratorArgs): Promise<Administrator | null>;
}
