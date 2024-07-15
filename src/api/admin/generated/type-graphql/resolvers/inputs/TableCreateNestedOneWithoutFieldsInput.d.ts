import { TableCreateOrConnectWithoutFieldsInput } from "../inputs/TableCreateOrConnectWithoutFieldsInput";
import { TableCreateWithoutFieldsInput } from "../inputs/TableCreateWithoutFieldsInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";
export declare class TableCreateNestedOneWithoutFieldsInput {
    create?: TableCreateWithoutFieldsInput | undefined;
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput | undefined;
    connect?: TableWhereUniqueInput | undefined;
}
