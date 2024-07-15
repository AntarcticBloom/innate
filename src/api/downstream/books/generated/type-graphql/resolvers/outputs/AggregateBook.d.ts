import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
export declare class AggregateBook {
    _count: BookCountAggregate | null;
    _min: BookMinAggregate | null;
    _max: BookMaxAggregate | null;
}
