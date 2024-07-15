import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBookArgs } from "./args/DeleteOneBookArgs";
import { Book } from "../../../models/Book";
export declare class DeleteOneBookResolver {
    deleteOneBook(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBookArgs): Promise<Book | null>;
}
