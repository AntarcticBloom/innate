import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAdministratorArgs } from "./args/UpdateOneAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class UpdateOneAdministratorResolver {
    updateOneAdministrator(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAdministratorArgs): Promise<Administrator | null>;
}
