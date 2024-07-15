import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBookAuthorArgs } from "./args/UpdateOneBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class UpdateOneBookAuthorResolver {
    updateOneBookAuthor(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBookAuthorArgs): Promise<BookAuthor | null>;
}
