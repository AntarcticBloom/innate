import { FieldCountAggregate } from "../outputs/FieldCountAggregate";
import { FieldMaxAggregate } from "../outputs/FieldMaxAggregate";
import { FieldMinAggregate } from "../outputs/FieldMinAggregate";
export declare class AggregateField {
    _count: FieldCountAggregate | null;
    _min: FieldMinAggregate | null;
    _max: FieldMaxAggregate | null;
}
