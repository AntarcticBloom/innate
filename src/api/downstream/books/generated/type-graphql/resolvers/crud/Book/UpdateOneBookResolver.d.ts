import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBookArgs } from "./args/UpdateOneBookArgs";
import { Book } from "../../../models/Book";
export declare class UpdateOneBookResolver {
    updateOneBook(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBookArgs): Promise<Book | null>;
}
