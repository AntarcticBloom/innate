import { AuthorCreateWithoutBookAuthorsInput } from "../inputs/AuthorCreateWithoutBookAuthorsInput";
import { AuthorUpdateWithoutBookAuthorsInput } from "../inputs/AuthorUpdateWithoutBookAuthorsInput";
import { AuthorWhereInput } from "../inputs/AuthorWhereInput";
export declare class AuthorUpsertWithoutBookAuthorsInput {
    update: AuthorUpdateWithoutBookAuthorsInput;
    create: AuthorCreateWithoutBookAuthorsInput;
    where?: AuthorWhereInput | undefined;
}
