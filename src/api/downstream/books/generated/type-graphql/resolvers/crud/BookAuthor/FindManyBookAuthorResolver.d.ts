import type { GraphQLResolveInfo } from "graphql";
import { FindManyBookAuthorArgs } from "./args/FindManyBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class FindManyBookAuthorResolver {
    bookAuthors(ctx: any, info: GraphQLResolveInfo, args: FindManyBookAuthorArgs): Promise<BookAuthor[]>;
}
