import { BookAuthorCreateNestedManyWithoutBookInput } from "../inputs/BookAuthorCreateNestedManyWithoutBookInput";
export declare class BookCreateInput {
    id?: string | undefined;
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    bookAuthors?: BookAuthorCreateNestedManyWithoutBookInput | undefined;
}
