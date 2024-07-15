import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAdministratorArgs } from "./args/UpsertOneAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class UpsertOneAdministratorResolver {
    upsertOneAdministrator(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAdministratorArgs): Promise<Administrator>;
}
