import { FieldOrderByWithRelationInput } from "../../../inputs/FieldOrderByWithRelationInput";
import { FieldWhereInput } from "../../../inputs/FieldWhereInput";
import { FieldWhereUniqueInput } from "../../../inputs/FieldWhereUniqueInput";
export declare class AggregateFieldArgs {
    where?: FieldWhereInput | undefined;
    orderBy?: FieldOrderByWithRelationInput[] | undefined;
    cursor?: FieldWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
