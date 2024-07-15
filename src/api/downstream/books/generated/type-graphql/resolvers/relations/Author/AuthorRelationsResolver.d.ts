import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { BookAuthor } from "../../../models/BookAuthor";
import { AuthorBookAuthorsArgs } from "./args/AuthorBookAuthorsArgs";
export declare class AuthorRelationsResolver {
    bookAuthors(author: Author, ctx: any, info: GraphQLResolveInfo, args: AuthorBookAuthorsArgs): Promise<BookAuthor[]>;
}
