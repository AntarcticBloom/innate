import { FieldAnnotationCreateNestedManyWithoutFieldInput } from "../inputs/FieldAnnotationCreateNestedManyWithoutFieldInput";
export declare class FieldCreateWithoutTableInput {
    id?: string | undefined;
    name: string;
    type: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutFieldInput | undefined;
}
