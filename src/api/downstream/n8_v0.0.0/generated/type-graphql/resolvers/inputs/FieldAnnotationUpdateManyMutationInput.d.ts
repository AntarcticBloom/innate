import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class FieldAnnotationUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    fieldName?: StringFieldUpdateOperationsInput | undefined;
    annotation?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
