import type { GraphQLResolveInfo } from "graphql";
import { AggregateTableArgs } from "./args/AggregateTableArgs";
import { AggregateTable } from "../../outputs/AggregateTable";
export declare class AggregateTableResolver {
    aggregateTable(ctx: any, info: GraphQLResolveInfo, args: AggregateTableArgs): Promise<AggregateTable>;
}
