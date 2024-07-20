import { TableCreateManySchemaInputEnvelope } from "../inputs/TableCreateManySchemaInputEnvelope";
import { TableCreateOrConnectWithoutSchemaInput } from "../inputs/TableCreateOrConnectWithoutSchemaInput";
import { TableCreateWithoutSchemaInput } from "../inputs/TableCreateWithoutSchemaInput";
import { TableScalarWhereInput } from "../inputs/TableScalarWhereInput";
import { TableUpdateManyWithWhereWithoutSchemaInput } from "../inputs/TableUpdateManyWithWhereWithoutSchemaInput";
import { TableUpdateWithWhereUniqueWithoutSchemaInput } from "../inputs/TableUpdateWithWhereUniqueWithoutSchemaInput";
import { TableUpsertWithWhereUniqueWithoutSchemaInput } from "../inputs/TableUpsertWithWhereUniqueWithoutSchemaInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";
export declare class TableUpdateManyWithoutSchemaNestedInput {
    create?: TableCreateWithoutSchemaInput[] | undefined;
    connectOrCreate?: TableCreateOrConnectWithoutSchemaInput[] | undefined;
    upsert?: TableUpsertWithWhereUniqueWithoutSchemaInput[] | undefined;
    createMany?: TableCreateManySchemaInputEnvelope | undefined;
    set?: TableWhereUniqueInput[] | undefined;
    disconnect?: TableWhereUniqueInput[] | undefined;
    delete?: TableWhereUniqueInput[] | undefined;
    connect?: TableWhereUniqueInput[] | undefined;
    update?: TableUpdateWithWhereUniqueWithoutSchemaInput[] | undefined;
    updateMany?: TableUpdateManyWithWhereWithoutSchemaInput[] | undefined;
    deleteMany?: TableScalarWhereInput[] | undefined;
}
