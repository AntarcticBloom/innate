import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FieldAnnotationUpdateManyWithoutFieldNestedInput } from "../inputs/FieldAnnotationUpdateManyWithoutFieldNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TableUpdateOneWithoutFieldsNestedInput } from "../inputs/TableUpdateOneWithoutFieldsNestedInput";
export declare class FieldUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    table?: TableUpdateOneWithoutFieldsNestedInput | undefined;
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutFieldNestedInput | undefined;
}
