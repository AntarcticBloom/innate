import { BookAuthorCreateInput } from "../../../inputs/BookAuthorCreateInput";
import { BookAuthorUpdateInput } from "../../../inputs/BookAuthorUpdateInput";
import { BookAuthorWhereUniqueInput } from "../../../inputs/BookAuthorWhereUniqueInput";
export declare class UpsertOneBookAuthorArgs {
    where: BookAuthorWhereUniqueInput;
    create: BookAuthorCreateInput;
    update: BookAuthorUpdateInput;
}
