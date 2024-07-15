import { BookCreateOrConnectWithoutBookAuthorsInput } from "../inputs/BookCreateOrConnectWithoutBookAuthorsInput";
import { BookCreateWithoutBookAuthorsInput } from "../inputs/BookCreateWithoutBookAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookCreateNestedOneWithoutBookAuthorsInput {
    create?: BookCreateWithoutBookAuthorsInput | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutBookAuthorsInput | undefined;
    connect?: BookWhereUniqueInput | undefined;
}
