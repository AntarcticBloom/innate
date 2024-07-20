import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAdministratorOrThrowArgs } from "./args/FindUniqueAdministratorOrThrowArgs";
import { Administrator } from "../../../models/Administrator";
export declare class FindUniqueAdministratorOrThrowResolver {
    getAdministrator(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAdministratorOrThrowArgs): Promise<Administrator | null>;
}
