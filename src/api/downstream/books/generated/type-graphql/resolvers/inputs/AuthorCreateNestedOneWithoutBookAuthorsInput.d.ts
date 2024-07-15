import { AuthorCreateOrConnectWithoutBookAuthorsInput } from "../inputs/AuthorCreateOrConnectWithoutBookAuthorsInput";
import { AuthorCreateWithoutBookAuthorsInput } from "../inputs/AuthorCreateWithoutBookAuthorsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";
export declare class AuthorCreateNestedOneWithoutBookAuthorsInput {
    create?: AuthorCreateWithoutBookAuthorsInput | undefined;
    connectOrCreate?: AuthorCreateOrConnectWithoutBookAuthorsInput | undefined;
    connect?: AuthorWhereUniqueInput | undefined;
}
