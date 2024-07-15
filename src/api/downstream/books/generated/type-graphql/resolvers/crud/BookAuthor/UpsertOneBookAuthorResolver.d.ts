import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBookAuthorArgs } from "./args/UpsertOneBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class UpsertOneBookAuthorResolver {
    upsertOneBookAuthor(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBookAuthorArgs): Promise<BookAuthor>;
}
