import { FieldCreateOrConnectWithoutFieldAnnotationsInput } from "../inputs/FieldCreateOrConnectWithoutFieldAnnotationsInput";
import { FieldCreateWithoutFieldAnnotationsInput } from "../inputs/FieldCreateWithoutFieldAnnotationsInput";
import { FieldWhereUniqueInput } from "../inputs/FieldWhereUniqueInput";
export declare class FieldCreateNestedOneWithoutFieldAnnotationsInput {
    create?: FieldCreateWithoutFieldAnnotationsInput | undefined;
    connectOrCreate?: FieldCreateOrConnectWithoutFieldAnnotationsInput | undefined;
    connect?: FieldWhereUniqueInput | undefined;
}
