import { TableCreateNestedOneWithoutFieldAnnotationsInput } from "../inputs/TableCreateNestedOneWithoutFieldAnnotationsInput";
export declare class FieldAnnotationCreateWithoutFieldInput {
    id?: string | undefined;
    modelName: string;
    fieldName: string;
    annotation: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    table?: TableCreateNestedOneWithoutFieldAnnotationsInput | undefined;
}
