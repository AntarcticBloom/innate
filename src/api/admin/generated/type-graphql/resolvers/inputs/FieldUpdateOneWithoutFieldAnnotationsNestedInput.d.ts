import { FieldCreateOrConnectWithoutFieldAnnotationsInput } from "../inputs/FieldCreateOrConnectWithoutFieldAnnotationsInput";
import { FieldCreateWithoutFieldAnnotationsInput } from "../inputs/FieldCreateWithoutFieldAnnotationsInput";
import { FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput } from "../inputs/FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput";
import { FieldUpsertWithoutFieldAnnotationsInput } from "../inputs/FieldUpsertWithoutFieldAnnotationsInput";
import { FieldWhereInput } from "../inputs/FieldWhereInput";
import { FieldWhereUniqueInput } from "../inputs/FieldWhereUniqueInput";
export declare class FieldUpdateOneWithoutFieldAnnotationsNestedInput {
    create?: FieldCreateWithoutFieldAnnotationsInput | undefined;
    connectOrCreate?: FieldCreateOrConnectWithoutFieldAnnotationsInput | undefined;
    upsert?: FieldUpsertWithoutFieldAnnotationsInput | undefined;
    disconnect?: FieldWhereInput | undefined;
    delete?: FieldWhereInput | undefined;
    connect?: FieldWhereUniqueInput | undefined;
    update?: FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput | undefined;
}
