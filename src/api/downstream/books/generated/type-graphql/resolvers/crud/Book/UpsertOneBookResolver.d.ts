import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBookArgs } from "./args/UpsertOneBookArgs";
import { Book } from "../../../models/Book";
export declare class UpsertOneBookResolver {
    upsertOneBook(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBookArgs): Promise<Book>;
}
