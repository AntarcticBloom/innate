import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookOrThrowArgs } from "./args/FindUniqueBookOrThrowArgs";
import { Book } from "../../../models/Book";
export declare class FindUniqueBookOrThrowResolver {
    getBook(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookOrThrowArgs): Promise<Book | null>;
}
