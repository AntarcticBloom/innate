import { BookAuthorCreateManyAuthorInputEnvelope } from "../inputs/BookAuthorCreateManyAuthorInputEnvelope";
import { BookAuthorCreateOrConnectWithoutAuthorInput } from "../inputs/BookAuthorCreateOrConnectWithoutAuthorInput";
import { BookAuthorCreateWithoutAuthorInput } from "../inputs/BookAuthorCreateWithoutAuthorInput";
import { BookAuthorWhereUniqueInput } from "../inputs/BookAuthorWhereUniqueInput";
export declare class BookAuthorCreateNestedManyWithoutAuthorInput {
    create?: BookAuthorCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: BookAuthorCreateManyAuthorInputEnvelope | undefined;
    connect?: BookAuthorWhereUniqueInput[] | undefined;
}
