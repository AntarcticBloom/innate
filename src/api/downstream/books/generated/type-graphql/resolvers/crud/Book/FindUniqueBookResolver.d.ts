import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookArgs } from "./args/FindUniqueBookArgs";
import { Book } from "../../../models/Book";
export declare class FindUniqueBookResolver {
    book(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookArgs): Promise<Book | null>;
}
