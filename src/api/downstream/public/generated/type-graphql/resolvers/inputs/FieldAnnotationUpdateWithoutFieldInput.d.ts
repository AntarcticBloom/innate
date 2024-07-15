import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TableUpdateOneWithoutFieldAnnotationsNestedInput } from "../inputs/TableUpdateOneWithoutFieldAnnotationsNestedInput";
export declare class FieldAnnotationUpdateWithoutFieldInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    fieldName?: StringFieldUpdateOperationsInput | undefined;
    annotation?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    table?: TableUpdateOneWithoutFieldAnnotationsNestedInput | undefined;
}
