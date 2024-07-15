import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBookAuthorArgs } from "./args/DeleteOneBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class DeleteOneBookAuthorResolver {
    deleteOneBookAuthor(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBookAuthorArgs): Promise<BookAuthor | null>;
}
