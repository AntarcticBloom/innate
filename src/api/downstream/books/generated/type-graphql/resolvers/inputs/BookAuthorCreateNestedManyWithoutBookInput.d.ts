import { BookAuthorCreateManyBookInputEnvelope } from "../inputs/BookAuthorCreateManyBookInputEnvelope";
import { BookAuthorCreateOrConnectWithoutBookInput } from "../inputs/BookAuthorCreateOrConnectWithoutBookInput";
import { BookAuthorCreateWithoutBookInput } from "../inputs/BookAuthorCreateWithoutBookInput";
import { BookAuthorWhereUniqueInput } from "../inputs/BookAuthorWhereUniqueInput";
export declare class BookAuthorCreateNestedManyWithoutBookInput {
    create?: BookAuthorCreateWithoutBookInput[] | undefined;
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput[] | undefined;
    createMany?: BookAuthorCreateManyBookInputEnvelope | undefined;
    connect?: BookAuthorWhereUniqueInput[] | undefined;
}
