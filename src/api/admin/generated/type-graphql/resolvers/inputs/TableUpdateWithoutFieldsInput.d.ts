import { Prisma } from "../../../../prismaClient";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FieldAnnotationUpdateManyWithoutTableNestedInput } from "../inputs/FieldAnnotationUpdateManyWithoutTableNestedInput";
import { SchemaUpdateOneWithoutTablesNestedInput } from "../inputs/SchemaUpdateOneWithoutTablesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TableUpdateWithoutFieldsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutTableNestedInput | undefined;
    schema?: SchemaUpdateOneWithoutTablesNestedInput | undefined;
}
