import type { GraphQLResolveInfo } from "graphql";
import { GroupByTableArgs } from "./args/GroupByTableArgs";
import { TableGroupBy } from "../../outputs/TableGroupBy";
export declare class GroupByTableResolver {
    groupByTable(ctx: any, info: GraphQLResolveInfo, args: GroupByTableArgs): Promise<TableGroupBy[]>;
}
