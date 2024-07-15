import type { GraphQLResolveInfo } from "graphql";
import { AggregateFieldArgs } from "./args/AggregateFieldArgs";
import { AggregateField } from "../../outputs/AggregateField";
export declare class AggregateFieldResolver {
    aggregateField(ctx: any, info: GraphQLResolveInfo, args: AggregateFieldArgs): Promise<AggregateField>;
}
