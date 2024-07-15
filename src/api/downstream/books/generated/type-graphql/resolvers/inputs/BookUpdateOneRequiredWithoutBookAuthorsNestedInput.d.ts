import { BookCreateOrConnectWithoutBookAuthorsInput } from "../inputs/BookCreateOrConnectWithoutBookAuthorsInput";
import { BookCreateWithoutBookAuthorsInput } from "../inputs/BookCreateWithoutBookAuthorsInput";
import { BookUpdateToOneWithWhereWithoutBookAuthorsInput } from "../inputs/BookUpdateToOneWithWhereWithoutBookAuthorsInput";
import { BookUpsertWithoutBookAuthorsInput } from "../inputs/BookUpsertWithoutBookAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";
export declare class BookUpdateOneRequiredWithoutBookAuthorsNestedInput {
    create?: BookCreateWithoutBookAuthorsInput | undefined;
    connectOrCreate?: BookCreateOrConnectWithoutBookAuthorsInput | undefined;
    upsert?: BookUpsertWithoutBookAuthorsInput | undefined;
    connect?: BookWhereUniqueInput | undefined;
    update?: BookUpdateToOneWithWhereWithoutBookAuthorsInput | undefined;
}
