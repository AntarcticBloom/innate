import { FieldCreateNestedOneWithoutFieldAnnotationsInput } from "../inputs/FieldCreateNestedOneWithoutFieldAnnotationsInput";
export declare class FieldAnnotationCreateWithoutTableInput {
    id?: string | undefined;
    modelName: string;
    fieldName: string;
    annotation: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    field?: FieldCreateNestedOneWithoutFieldAnnotationsInput | undefined;
}
