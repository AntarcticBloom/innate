import { SchemaCountAggregate } from "../outputs/SchemaCountAggregate";
import { SchemaMaxAggregate } from "../outputs/SchemaMaxAggregate";
import { SchemaMinAggregate } from "../outputs/SchemaMinAggregate";
export declare class AggregateSchema {
    _count: SchemaCountAggregate | null;
    _min: SchemaMinAggregate | null;
    _max: SchemaMaxAggregate | null;
}
