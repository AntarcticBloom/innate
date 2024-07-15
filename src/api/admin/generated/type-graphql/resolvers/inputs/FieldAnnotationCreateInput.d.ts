import { FieldCreateNestedOneWithoutFieldAnnotationsInput } from "../inputs/FieldCreateNestedOneWithoutFieldAnnotationsInput";
import { TableCreateNestedOneWithoutFieldAnnotationsInput } from "../inputs/TableCreateNestedOneWithoutFieldAnnotationsInput";
export declare class FieldAnnotationCreateInput {
    id?: string | undefined;
    modelName: string;
    fieldName: string;
    annotation: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    field?: FieldCreateNestedOneWithoutFieldAnnotationsInput | undefined;
    table?: TableCreateNestedOneWithoutFieldAnnotationsInput | undefined;
}
