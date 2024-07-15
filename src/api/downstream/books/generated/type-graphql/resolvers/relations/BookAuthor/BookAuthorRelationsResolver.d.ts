import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { Book } from "../../../models/Book";
import { BookAuthor } from "../../../models/BookAuthor";
export declare class BookAuthorRelationsResolver {
    author(bookAuthor: BookAuthor, ctx: any, info: GraphQLResolveInfo): Promise<Author>;
    book(bookAuthor: BookAuthor, ctx: any, info: GraphQLResolveInfo): Promise<Book>;
}
