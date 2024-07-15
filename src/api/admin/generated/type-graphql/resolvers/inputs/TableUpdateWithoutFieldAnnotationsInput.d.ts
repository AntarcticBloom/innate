import { Prisma } from "../../../../prismaClient";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FieldUpdateManyWithoutTableNestedInput } from "../inputs/FieldUpdateManyWithoutTableNestedInput";
import { SchemaUpdateOneWithoutTablesNestedInput } from "../inputs/SchemaUpdateOneWithoutTablesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TableUpdateWithoutFieldAnnotationsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fields?: FieldUpdateManyWithoutTableNestedInput | undefined;
    schema?: SchemaUpdateOneWithoutTablesNestedInput | undefined;
}
