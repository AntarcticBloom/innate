import { FieldCountAggregate } from "../outputs/FieldCountAggregate";
import { FieldMaxAggregate } from "../outputs/FieldMaxAggregate";
import { FieldMinAggregate } from "../outputs/FieldMinAggregate";
export declare class FieldGroupBy {
    id: string;
    tableId: string | null;
    name: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FieldCountAggregate | null;
    _min: FieldMinAggregate | null;
    _max: FieldMaxAggregate | null;
}
