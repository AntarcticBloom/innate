import { SchemaCountAggregate } from "../outputs/SchemaCountAggregate";
import { SchemaMaxAggregate } from "../outputs/SchemaMaxAggregate";
import { SchemaMinAggregate } from "../outputs/SchemaMinAggregate";
export declare class SchemaGroupBy {
    id: string;
    name: string;
    tracked: boolean | null;
    isNewestProductionVersion: boolean | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SchemaCountAggregate | null;
    _min: SchemaMinAggregate | null;
    _max: SchemaMaxAggregate | null;
}
