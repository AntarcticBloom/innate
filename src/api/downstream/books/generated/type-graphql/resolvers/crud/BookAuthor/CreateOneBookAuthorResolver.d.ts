import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBookAuthorArgs } from "./args/CreateOneBookAuthorArgs";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class CreateOneBookAuthorResolver {
    createOneBookAuthor(ctx: any, info: GraphQLResolveInfo, args: CreateOneBookAuthorArgs): Promise<BookAuthor>;
}
