import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookArgs } from "./args/AggregateBookArgs";
import { AggregateBook } from "../../outputs/AggregateBook";
export declare class AggregateBookResolver {
    aggregateBook(ctx: any, info: GraphQLResolveInfo, args: AggregateBookArgs): Promise<AggregateBook>;
}
