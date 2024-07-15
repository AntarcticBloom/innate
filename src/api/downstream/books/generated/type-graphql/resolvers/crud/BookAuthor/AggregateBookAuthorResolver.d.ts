import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookAuthorArgs } from "./args/AggregateBookAuthorArgs";
import { AggregateBookAuthor } from "../../outputs/AggregateBookAuthor";
export declare class AggregateBookAuthorResolver {
    aggregateBookAuthor(ctx: any, info: GraphQLResolveInfo, args: AggregateBookAuthorArgs): Promise<AggregateBookAuthor>;
}
