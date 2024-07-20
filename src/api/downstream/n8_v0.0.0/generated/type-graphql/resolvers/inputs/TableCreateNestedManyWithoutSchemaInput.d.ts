import { TableCreateManySchemaInputEnvelope } from "../inputs/TableCreateManySchemaInputEnvelope";
import { TableCreateOrConnectWithoutSchemaInput } from "../inputs/TableCreateOrConnectWithoutSchemaInput";
import { TableCreateWithoutSchemaInput } from "../inputs/TableCreateWithoutSchemaInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";
export declare class TableCreateNestedManyWithoutSchemaInput {
    create?: TableCreateWithoutSchemaInput[] | undefined;
    connectOrCreate?: TableCreateOrConnectWithoutSchemaInput[] | undefined;
    createMany?: TableCreateManySchemaInputEnvelope | undefined;
    connect?: TableWhereUniqueInput[] | undefined;
}
