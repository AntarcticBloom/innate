import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBookArgs } from "./args/CreateOneBookArgs";
import { Book } from "../../../models/Book";
export declare class CreateOneBookResolver {
    createOneBook(ctx: any, info: GraphQLResolveInfo, args: CreateOneBookArgs): Promise<Book>;
}
