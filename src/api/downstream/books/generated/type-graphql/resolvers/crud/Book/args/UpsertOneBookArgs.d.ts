import { BookCreateInput } from "../../../inputs/BookCreateInput";
import { BookUpdateInput } from "../../../inputs/BookUpdateInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";
export declare class UpsertOneBookArgs {
    where: BookWhereUniqueInput;
    create: BookCreateInput;
    update: BookUpdateInput;
}
