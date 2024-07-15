import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FieldAnnotationUpdateManyWithoutTableNestedInput } from "../inputs/FieldAnnotationUpdateManyWithoutTableNestedInput";
import { FieldUpdateManyWithoutTableNestedInput } from "../inputs/FieldUpdateManyWithoutTableNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TableUpdateWithoutSchemaInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fields?: FieldUpdateManyWithoutTableNestedInput | undefined;
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutTableNestedInput | undefined;
}
