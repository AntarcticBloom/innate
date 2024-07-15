import type { GraphQLResolveInfo } from "graphql";
import { GroupByAdministratorArgs } from "./args/GroupByAdministratorArgs";
import { AdministratorGroupBy } from "../../outputs/AdministratorGroupBy";
export declare class GroupByAdministratorResolver {
    groupByAdministrator(ctx: any, info: GraphQLResolveInfo, args: GroupByAdministratorArgs): Promise<AdministratorGroupBy[]>;
}
