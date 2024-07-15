import { AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput } from "../inputs/AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput";
import { BookUpdateOneRequiredWithoutBookAuthorsNestedInput } from "../inputs/BookUpdateOneRequiredWithoutBookAuthorsNestedInput";
export declare class BookAuthorUpdateInput {
    author?: AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput | undefined;
    book?: BookUpdateOneRequiredWithoutBookAuthorsNestedInput | undefined;
}
