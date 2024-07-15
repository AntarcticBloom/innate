import { BookAuthorCountOrderByAggregateInput } from "../inputs/BookAuthorCountOrderByAggregateInput";
import { BookAuthorMaxOrderByAggregateInput } from "../inputs/BookAuthorMaxOrderByAggregateInput";
import { BookAuthorMinOrderByAggregateInput } from "../inputs/BookAuthorMinOrderByAggregateInput";
export declare class BookAuthorOrderByWithAggregationInput {
    bookId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    _count?: BookAuthorCountOrderByAggregateInput | undefined;
    _max?: BookAuthorMaxOrderByAggregateInput | undefined;
    _min?: BookAuthorMinOrderByAggregateInput | undefined;
}
