import { SchemaCreateOrConnectWithoutTablesInput } from "../inputs/SchemaCreateOrConnectWithoutTablesInput";
import { SchemaCreateWithoutTablesInput } from "../inputs/SchemaCreateWithoutTablesInput";
import { SchemaUpdateToOneWithWhereWithoutTablesInput } from "../inputs/SchemaUpdateToOneWithWhereWithoutTablesInput";
import { SchemaUpsertWithoutTablesInput } from "../inputs/SchemaUpsertWithoutTablesInput";
import { SchemaWhereInput } from "../inputs/SchemaWhereInput";
import { SchemaWhereUniqueInput } from "../inputs/SchemaWhereUniqueInput";
export declare class SchemaUpdateOneWithoutTablesNestedInput {
    create?: SchemaCreateWithoutTablesInput | undefined;
    connectOrCreate?: SchemaCreateOrConnectWithoutTablesInput | undefined;
    upsert?: SchemaUpsertWithoutTablesInput | undefined;
    disconnect?: SchemaWhereInput | undefined;
    delete?: SchemaWhereInput | undefined;
    connect?: SchemaWhereUniqueInput | undefined;
    update?: SchemaUpdateToOneWithWhereWithoutTablesInput | undefined;
}
