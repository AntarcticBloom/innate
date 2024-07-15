import { TableCountAggregate } from "../outputs/TableCountAggregate";
import { TableMaxAggregate } from "../outputs/TableMaxAggregate";
import { TableMinAggregate } from "../outputs/TableMinAggregate";
export declare class AggregateTable {
    _count: TableCountAggregate | null;
    _min: TableMinAggregate | null;
    _max: TableMaxAggregate | null;
}
