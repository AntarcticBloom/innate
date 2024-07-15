import type { GraphQLResolveInfo } from "graphql";
import { FindManyBookArgs } from "./args/FindManyBookArgs";
import { Book } from "../../../models/Book";
export declare class FindManyBookResolver {
    books(ctx: any, info: GraphQLResolveInfo, args: FindManyBookArgs): Promise<Book[]>;
}
