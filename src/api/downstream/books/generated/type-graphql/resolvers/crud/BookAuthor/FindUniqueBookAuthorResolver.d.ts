import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookAuthorArgs } from "./args/FindUniqueBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class FindUniqueBookAuthorResolver {
    bookAuthor(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookAuthorArgs): Promise<BookAuthor | null>;
}
