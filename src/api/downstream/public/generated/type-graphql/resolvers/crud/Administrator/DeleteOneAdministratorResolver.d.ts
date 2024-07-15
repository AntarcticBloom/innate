import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAdministratorArgs } from "./args/DeleteOneAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class DeleteOneAdministratorResolver {
    deleteOneAdministrator(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAdministratorArgs): Promise<Administrator | null>;
}
