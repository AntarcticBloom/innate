import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TableUpdateOneWithoutFieldsNestedInput } from "../inputs/TableUpdateOneWithoutFieldsNestedInput";
export declare class FieldUpdateWithoutFieldAnnotationsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    table?: TableUpdateOneWithoutFieldsNestedInput | undefined;
}
