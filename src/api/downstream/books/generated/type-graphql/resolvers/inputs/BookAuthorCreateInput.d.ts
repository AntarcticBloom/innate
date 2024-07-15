import { AuthorCreateNestedOneWithoutBookAuthorsInput } from "../inputs/AuthorCreateNestedOneWithoutBookAuthorsInput";
import { BookCreateNestedOneWithoutBookAuthorsInput } from "../inputs/BookCreateNestedOneWithoutBookAuthorsInput";
export declare class BookAuthorCreateInput {
    author: AuthorCreateNestedOneWithoutBookAuthorsInput;
    book: BookCreateNestedOneWithoutBookAuthorsInput;
}
