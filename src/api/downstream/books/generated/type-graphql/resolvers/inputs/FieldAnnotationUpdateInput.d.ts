import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FieldUpdateOneWithoutFieldAnnotationsNestedInput } from "../inputs/FieldUpdateOneWithoutFieldAnnotationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TableUpdateOneWithoutFieldAnnotationsNestedInput } from "../inputs/TableUpdateOneWithoutFieldAnnotationsNestedInput";
export declare class FieldAnnotationUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    fieldName?: StringFieldUpdateOperationsInput | undefined;
    annotation?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    field?: FieldUpdateOneWithoutFieldAnnotationsNestedInput | undefined;
    table?: TableUpdateOneWithoutFieldAnnotationsNestedInput | undefined;
}
