import { FieldAnnotationCreateNestedManyWithoutFieldInput } from "../inputs/FieldAnnotationCreateNestedManyWithoutFieldInput";
import { TableCreateNestedOneWithoutFieldsInput } from "../inputs/TableCreateNestedOneWithoutFieldsInput";
export declare class FieldCreateInput {
    id?: string | undefined;
    name: string;
    type: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    table?: TableCreateNestedOneWithoutFieldsInput | undefined;
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutFieldInput | undefined;
}
