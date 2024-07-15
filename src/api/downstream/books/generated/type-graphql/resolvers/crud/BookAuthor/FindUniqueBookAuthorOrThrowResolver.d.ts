import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookAuthorOrThrowArgs } from "./args/FindUniqueBookAuthorOrThrowArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class FindUniqueBookAuthorOrThrowResolver {
    getBookAuthor(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookAuthorOrThrowArgs): Promise<BookAuthor | null>;
}
