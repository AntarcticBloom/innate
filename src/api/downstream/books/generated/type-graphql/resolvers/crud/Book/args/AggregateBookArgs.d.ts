import { BookOrderByWithRelationInput } from "../../../inputs/BookOrderByWithRelationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";
export declare class AggregateBookArgs {
    where?: BookWhereInput | undefined;
    orderBy?: BookOrderByWithRelationInput[] | undefined;
    cursor?: BookWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
