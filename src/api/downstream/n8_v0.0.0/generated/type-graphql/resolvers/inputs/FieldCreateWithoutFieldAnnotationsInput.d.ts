import { TableCreateNestedOneWithoutFieldsInput } from "../inputs/TableCreateNestedOneWithoutFieldsInput";
export declare class FieldCreateWithoutFieldAnnotationsInput {
    id?: string | undefined;
    name: string;
    type: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    table?: TableCreateNestedOneWithoutFieldsInput | undefined;
}
