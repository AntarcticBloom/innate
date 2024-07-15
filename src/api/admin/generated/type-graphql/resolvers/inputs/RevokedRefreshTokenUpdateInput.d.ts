import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class RevokedRefreshTokenUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: StringFieldUpdateOperationsInput | undefined;
    actualExpiration?: DateTimeFieldUpdateOperationsInput | undefined;
}
