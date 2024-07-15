import type { GraphQLResolveInfo } from "graphql";
import { GroupByBookAuthorArgs } from "./args/GroupByBookAuthorArgs";
import { BookAuthorGroupBy } from "../../outputs/BookAuthorGroupBy";
export declare class GroupByBookAuthorResolver {
    groupByBookAuthor(ctx: any, info: GraphQLResolveInfo, args: GroupByBookAuthorArgs): Promise<BookAuthorGroupBy[]>;
}
