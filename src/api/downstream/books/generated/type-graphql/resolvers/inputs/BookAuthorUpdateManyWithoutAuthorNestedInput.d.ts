import { BookAuthorCreateManyAuthorInputEnvelope } from "../inputs/BookAuthorCreateManyAuthorInputEnvelope";
import { BookAuthorCreateOrConnectWithoutAuthorInput } from "../inputs/BookAuthorCreateOrConnectWithoutAuthorInput";
import { BookAuthorCreateWithoutAuthorInput } from "../inputs/BookAuthorCreateWithoutAuthorInput";
import { BookAuthorScalarWhereInput } from "../inputs/BookAuthorScalarWhereInput";
import { BookAuthorUpdateManyWithWhereWithoutAuthorInput } from "../inputs/BookAuthorUpdateManyWithWhereWithoutAuthorInput";
import { BookAuthorUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/BookAuthorUpdateWithWhereUniqueWithoutAuthorInput";
import { BookAuthorUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/BookAuthorUpsertWithWhereUniqueWithoutAuthorInput";
import { BookAuthorWhereUniqueInput } from "../inputs/BookAuthorWhereUniqueInput";
export declare class BookAuthorUpdateManyWithoutAuthorNestedInput {
    create?: BookAuthorCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: BookAuthorCreateManyAuthorInputEnvelope | undefined;
    set?: BookAuthorWhereUniqueInput[] | undefined;
    disconnect?: BookAuthorWhereUniqueInput[] | undefined;
    delete?: BookAuthorWhereUniqueInput[] | undefined;
    connect?: BookAuthorWhereUniqueInput[] | undefined;
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: BookAuthorScalarWhereInput[] | undefined;
}
