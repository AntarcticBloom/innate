import { SchemaCreateOrConnectWithoutTablesInput } from "../inputs/SchemaCreateOrConnectWithoutTablesInput";
import { SchemaCreateWithoutTablesInput } from "../inputs/SchemaCreateWithoutTablesInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";
export declare class SchemaCreateNestedOneWithoutTablesInput {
    create?: SchemaCreateWithoutTablesInput | undefined;
    connectOrCreate?: SchemaCreateOrConnectWithoutTablesInput | undefined;
    connect?: SchemaWhereUniqueInput | undefined;
}
