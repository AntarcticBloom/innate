import { BookAuthorCreateManyBookInputEnvelope } from "../inputs/BookAuthorCreateManyBookInputEnvelope";
import { BookAuthorCreateOrConnectWithoutBookInput } from "../inputs/BookAuthorCreateOrConnectWithoutBookInput";
import { BookAuthorCreateWithoutBookInput } from "../inputs/BookAuthorCreateWithoutBookInput";
import { BookAuthorScalarWhereInput } from "../inputs/BookAuthorScalarWhereInput";
import { BookAuthorUpdateManyWithWhereWithoutBookInput } from "../inputs/BookAuthorUpdateManyWithWhereWithoutBookInput";
import { BookAuthorUpdateWithWhereUniqueWithoutBookInput } from "../inputs/BookAuthorUpdateWithWhereUniqueWithoutBookInput";
import { BookAuthorUpsertWithWhereUniqueWithoutBookInput } from "../inputs/BookAuthorUpsertWithWhereUniqueWithoutBookInput";
import { BookAuthorWhereUniqueInput } from "../inputs/BookAuthorWhereUniqueInput";
export declare class BookAuthorUpdateManyWithoutBookNestedInput {
    create?: BookAuthorCreateWithoutBookInput[] | undefined;
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput[] | undefined;
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput[] | undefined;
    createMany?: BookAuthorCreateManyBookInputEnvelope | undefined;
    set?: BookAuthorWhereUniqueInput[] | undefined;
    disconnect?: BookAuthorWhereUniqueInput[] | undefined;
    delete?: BookAuthorWhereUniqueInput[] | undefined;
    connect?: BookAuthorWhereUniqueInput[] | undefined;
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput[] | undefined;
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput[] | undefined;
    deleteMany?: BookAuthorScalarWhereInput[] | undefined;
}
