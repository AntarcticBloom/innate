import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookArgs } from "./args/FindFirstBookArgs";
import { Book } from "../../../models/Book";
export declare class FindFirstBookResolver {
    findFirstBook(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookArgs): Promise<Book | null>;
}
