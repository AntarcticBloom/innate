import { BookCreateWithoutBookAuthorsInput } from "../inputs/BookCreateWithoutBookAuthorsInput";
import { BookUpdateWithoutBookAuthorsInput } from "../inputs/BookUpdateWithoutBookAuthorsInput";
import { BookWhereInput } from "../inputs/BookWhereInput";
export declare class BookUpsertWithoutBookAuthorsInput {
    update: BookUpdateWithoutBookAuthorsInput;
    create: BookCreateWithoutBookAuthorsInput;
    where?: BookWhereInput | undefined;
}
