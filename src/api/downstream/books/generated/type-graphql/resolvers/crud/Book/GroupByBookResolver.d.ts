import type { GraphQLResolveInfo } from "graphql";
import { GroupByBookArgs } from "./args/GroupByBookArgs";
import { BookGroupBy } from "../../outputs/BookGroupBy";
export declare class GroupByBookResolver {
    groupByBook(ctx: any, info: GraphQLResolveInfo, args: GroupByBookArgs): Promise<BookGroupBy[]>;
}
