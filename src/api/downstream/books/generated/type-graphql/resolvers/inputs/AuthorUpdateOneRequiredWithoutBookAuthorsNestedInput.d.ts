import { AuthorCreateOrConnectWithoutBookAuthorsInput } from "../inputs/AuthorCreateOrConnectWithoutBookAuthorsInput";
import { AuthorCreateWithoutBookAuthorsInput } from "../inputs/AuthorCreateWithoutBookAuthorsInput";
import { AuthorUpdateToOneWithWhereWithoutBookAuthorsInput } from "../inputs/AuthorUpdateToOneWithWhereWithoutBookAuthorsInput";
import { AuthorUpsertWithoutBookAuthorsInput } from "../inputs/AuthorUpsertWithoutBookAuthorsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";
export declare class AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput {
    create?: AuthorCreateWithoutBookAuthorsInput | undefined;
    connectOrCreate?: AuthorCreateOrConnectWithoutBookAuthorsInput | undefined;
    upsert?: AuthorUpsertWithoutBookAuthorsInput | undefined;
    connect?: AuthorWhereUniqueInput | undefined;
    update?: AuthorUpdateToOneWithWhereWithoutBookAuthorsInput | undefined;
}
