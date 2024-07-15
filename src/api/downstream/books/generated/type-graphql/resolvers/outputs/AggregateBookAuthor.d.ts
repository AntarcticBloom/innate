import { BookAuthorCountAggregate } from "../outputs/BookAuthorCountAggregate";
import { BookAuthorMaxAggregate } from "../outputs/BookAuthorMaxAggregate";
import { BookAuthorMinAggregate } from "../outputs/BookAuthorMinAggregate";
export declare class AggregateBookAuthor {
    _count: BookAuthorCountAggregate | null;
    _min: BookAuthorMinAggregate | null;
    _max: BookAuthorMaxAggregate | null;
}
