import { BookAuthorOrderByWithRelationInput } from "../../../inputs/BookAuthorOrderByWithRelationInput";
import { BookAuthorWhereInput } from "../../../inputs/BookAuthorWhereInput";
import { BookAuthorWhereUniqueInput } from "../../../inputs/BookAuthorWhereUniqueInput";
export declare class AggregateBookAuthorArgs {
    where?: BookAuthorWhereInput | undefined;
    orderBy?: BookAuthorOrderByWithRelationInput[] | undefined;
    cursor?: BookAuthorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
