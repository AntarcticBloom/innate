import { TableCreateWithoutFieldAnnotationsInput } from "../inputs/TableCreateWithoutFieldAnnotationsInput";
import { TableUpdateWithoutFieldAnnotationsInput } from "../inputs/TableUpdateWithoutFieldAnnotationsInput";
import { TableWhereInput } from "../inputs/TableWhereInput";
export declare class TableUpsertWithoutFieldAnnotationsInput {
    update: TableUpdateWithoutFieldAnnotationsInput;
    create: TableCreateWithoutFieldAnnotationsInput;
    where?: TableWhereInput | undefined;
}
