import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookAuthorArgs } from "./args/FindFirstBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class FindFirstBookAuthorResolver {
    findFirstBookAuthor(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookAuthorArgs): Promise<BookAuthor | null>;
}
