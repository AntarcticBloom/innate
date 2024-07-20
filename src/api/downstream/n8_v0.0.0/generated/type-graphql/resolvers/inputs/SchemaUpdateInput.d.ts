import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TableUpdateManyWithoutSchemaNestedInput } from "../inputs/TableUpdateManyWithoutSchemaNestedInput";
export declare class SchemaUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    tracked?: NullableBoolFieldUpdateOperationsInput | undefined;
    baselineVersionOfSchema?: NullableStringFieldUpdateOperationsInput | undefined;
    isNewestProductionVersion?: NullableBoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    tables?: TableUpdateManyWithoutSchemaNestedInput | undefined;
}
