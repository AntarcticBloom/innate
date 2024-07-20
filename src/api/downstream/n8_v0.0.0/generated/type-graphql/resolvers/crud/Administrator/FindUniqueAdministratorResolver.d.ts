import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAdministratorArgs } from "./args/FindUniqueAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class FindUniqueAdministratorResolver {
    administrator(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAdministratorArgs): Promise<Administrator | null>;
}
