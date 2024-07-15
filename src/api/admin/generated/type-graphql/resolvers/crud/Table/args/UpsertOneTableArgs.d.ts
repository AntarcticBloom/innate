import { TableCreateInput } from "../../../inputs/TableCreateInput";
import { TableUpdateInput } from "../../../inputs/TableUpdateInput";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";
export declare class UpsertOneTableArgs {
    where: TableWhereUniqueInput;
    create: TableCreateInput;
    update: TableUpdateInput;
}
