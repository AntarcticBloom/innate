import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAdministratorOrThrowArgs } from "./args/FindFirstAdministratorOrThrowArgs";
import { Administrator } from "../../../models/Administrator";
export declare class FindFirstAdministratorOrThrowResolver {
    findFirstAdministratorOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAdministratorOrThrowArgs): Promise<Administrator | null>;
}
