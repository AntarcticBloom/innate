import type { GraphQLResolveInfo } from "graphql";
import { Book } from "../../../models/Book";
import { BookAuthor } from "../../../models/BookAuthor";
import { BookBookAuthorsArgs } from "./args/BookBookAuthorsArgs";
export declare class BookRelationsResolver {
    bookAuthors(book: Book, ctx: any, info: GraphQLResolveInfo, args: BookBookAuthorsArgs): Promise<BookAuthor[]>;
}
