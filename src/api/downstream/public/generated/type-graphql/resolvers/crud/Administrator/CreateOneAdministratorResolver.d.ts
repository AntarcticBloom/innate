import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAdministratorArgs } from "./args/CreateOneAdministratorArgs";
import { Administrator } from "../../../models/Administrator";
export declare class CreateOneAdministratorResolver {
    createOneAdministrator(ctx: any, info: GraphQLResolveInfo, args: CreateOneAdministratorArgs): Promise<Administrator>;
}
