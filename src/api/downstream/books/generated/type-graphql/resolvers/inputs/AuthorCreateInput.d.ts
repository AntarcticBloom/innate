import { BookAuthorCreateNestedManyWithoutAuthorInput } from "../inputs/BookAuthorCreateNestedManyWithoutAuthorInput";
export declare class AuthorCreateInput {
    id?: string | undefined;
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    bookAuthors?: BookAuthorCreateNestedManyWithoutAuthorInput | undefined;
}
