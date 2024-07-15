import { TableCreateOrConnectWithoutFieldAnnotationsInput } from "../inputs/TableCreateOrConnectWithoutFieldAnnotationsInput";
import { TableCreateWithoutFieldAnnotationsInput } from "../inputs/TableCreateWithoutFieldAnnotationsInput";
import { TableUpdateToOneWithWhereWithoutFieldAnnotationsInput } from "../inputs/TableUpdateToOneWithWhereWithoutFieldAnnotationsInput";
import { TableUpsertWithoutFieldAnnotationsInput } from "../inputs/TableUpsertWithoutFieldAnnotationsInput";
import { TableWhereInput } from "../inputs/TableWhereInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";
export declare class TableUpdateOneWithoutFieldAnnotationsNestedInput {
    create?: TableCreateWithoutFieldAnnotationsInput | undefined;
    connectOrCreate?: TableCreateOrConnectWithoutFieldAnnotationsInput | undefined;
    upsert?: TableUpsertWithoutFieldAnnotationsInput | undefined;
    disconnect?: TableWhereInput | undefined;
    delete?: TableWhereInput | undefined;
    connect?: TableWhereUniqueInput | undefined;
    update?: TableUpdateToOneWithWhereWithoutFieldAnnotationsInput | undefined;
}
