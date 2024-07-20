import { TableCreateWithoutFieldsInput } from "../inputs/TableCreateWithoutFieldsInput";
import { TableUpdateWithoutFieldsInput } from "../inputs/TableUpdateWithoutFieldsInput";
import { TableWhereInput } from "../inputs/TableWhereInput";
export declare class TableUpsertWithoutFieldsInput {
    update: TableUpdateWithoutFieldsInput;
    create: TableCreateWithoutFieldsInput;
    where?: TableWhereInput | undefined;
}
