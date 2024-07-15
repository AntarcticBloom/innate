import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookAuthorOrThrowArgs } from "./args/FindFirstBookAuthorOrThrowArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class FindFirstBookAuthorOrThrowResolver {
    findFirstBookAuthorOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookAuthorOrThrowArgs): Promise<BookAuthor | null>;
}
