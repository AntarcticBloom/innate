import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBookOrThrowArgs } from "./args/FindFirstBookOrThrowArgs";
import { Book } from "../../../models/Book";
export declare class FindFirstBookOrThrowResolver {
    findFirstBookOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookOrThrowArgs): Promise<Book | null>;
}
