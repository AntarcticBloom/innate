import type { GraphQLResolveInfo } from "graphql";
import { GroupByFieldArgs } from "./args/GroupByFieldArgs";
import { FieldGroupBy } from "../../outputs/FieldGroupBy";
export declare class GroupByFieldResolver {
    groupByField(ctx: any, info: GraphQLResolveInfo, args: GroupByFieldArgs): Promise<FieldGroupBy[]>;
}
