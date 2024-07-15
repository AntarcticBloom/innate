import { TableCreateOrConnectWithoutFieldAnnotationsInput } from "../inputs/TableCreateOrConnectWithoutFieldAnnotationsInput";
import { TableCreateWithoutFieldAnnotationsInput } from "../inputs/TableCreateWithoutFieldAnnotationsInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";
export declare class TableCreateNestedOneWithoutFieldAnnotationsInput {
    create?: TableCreateWithoutFieldAnnotationsInput | undefined;
    connectOrCreate?: TableCreateOrConnectWithoutFieldAnnotationsInput | undefined;
    connect?: TableWhereUniqueInput | undefined;
}
