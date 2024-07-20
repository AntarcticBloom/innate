import { TableCreateOrConnectWithoutFieldsInput } from "../inputs/TableCreateOrConnectWithoutFieldsInput";
import { TableCreateWithoutFieldsInput } from "../inputs/TableCreateWithoutFieldsInput";
import { TableUpdateToOneWithWhereWithoutFieldsInput } from "../inputs/TableUpdateToOneWithWhereWithoutFieldsInput";
import { TableUpsertWithoutFieldsInput } from "../inputs/TableUpsertWithoutFieldsInput";
import { TableWhereInput } from "../inputs/TableWhereInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";
export declare class TableUpdateOneWithoutFieldsNestedInput {
    create?: TableCreateWithoutFieldsInput | undefined;
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput | undefined;
    upsert?: TableUpsertWithoutFieldsInput | undefined;
    disconnect?: TableWhereInput | undefined;
    delete?: TableWhereInput | undefined;
    connect?: TableWhereUniqueInput | undefined;
    update?: TableUpdateToOneWithWhereWithoutFieldsInput | undefined;
}
