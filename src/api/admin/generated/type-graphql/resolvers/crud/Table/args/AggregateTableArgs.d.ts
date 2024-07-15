import { TableOrderByWithRelationInput } from "../../../inputs/TableOrderByWithRelationInput";
import { TableWhereInput } from "../../../inputs/TableWhereInput";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";
export declare class AggregateTableArgs {
    where?: TableWhereInput | undefined;
    orderBy?: TableOrderByWithRelationInput[] | undefined;
    cursor?: TableWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}