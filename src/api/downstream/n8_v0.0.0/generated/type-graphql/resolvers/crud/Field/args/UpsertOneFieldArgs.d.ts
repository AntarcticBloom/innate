import { FieldCreateInput } from "../../../inputs/FieldCreateInput";
import { FieldUpdateInput } from "../../../inputs/FieldUpdateInput";
import { FieldWhereUniqueInput } from "../../../inputs/FieldWhereUniqueInput";
export declare class UpsertOneFieldArgs {
    where: FieldWhereUniqueInput;
    create: FieldCreateInput;
    update: FieldUpdateInput;
}
