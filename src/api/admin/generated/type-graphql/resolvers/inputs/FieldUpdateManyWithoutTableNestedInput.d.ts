import { FieldCreateManyTableInputEnvelope } from "../inputs/FieldCreateManyTableInputEnvelope";
import { FieldCreateOrConnectWithoutTableInput } from "../inputs/FieldCreateOrConnectWithoutTableInput";
import { FieldCreateWithoutTableInput } from "../inputs/FieldCreateWithoutTableInput";
import { FieldScalarWhereInput } from "../inputs/FieldScalarWhereInput";
import { FieldUpdateManyWithWhereWithoutTableInput } from "../inputs/FieldUpdateManyWithWhereWithoutTableInput";
import { FieldUpdateWithWhereUniqueWithoutTableInput } from "../inputs/FieldUpdateWithWhereUniqueWithoutTableInput";
import { FieldUpsertWithWhereUniqueWithoutTableInput } from "../inputs/FieldUpsertWithWhereUniqueWithoutTableInput";
import { FieldWhereUniqueInput } from "../inputs/FieldWhereUniqueInput";
export declare class FieldUpdateManyWithoutTableNestedInput {
    create?: FieldCreateWithoutTableInput[] | undefined;
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput[] | undefined;
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput[] | undefined;
    createMany?: FieldCreateManyTableInputEnvelope | undefined;
    set?: FieldWhereUniqueInput[] | undefined;
    disconnect?: FieldWhereUniqueInput[] | undefined;
    delete?: FieldWhereUniqueInput[] | undefined;
    connect?: FieldWhereUniqueInput[] | undefined;
    update?: FieldUpdateWithWhereUniqueWithoutTableInput[] | undefined;
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput[] | undefined;
    deleteMany?: FieldScalarWhereInput[] | undefined;
}
