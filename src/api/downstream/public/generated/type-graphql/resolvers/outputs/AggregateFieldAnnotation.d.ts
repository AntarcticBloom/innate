import { FieldAnnotationCountAggregate } from "../outputs/FieldAnnotationCountAggregate";
import { FieldAnnotationMaxAggregate } from "../outputs/FieldAnnotationMaxAggregate";
import { FieldAnnotationMinAggregate } from "../outputs/FieldAnnotationMinAggregate";
export declare class AggregateFieldAnnotation {
    _count: FieldAnnotationCountAggregate | null;
    _min: FieldAnnotationMinAggregate | null;
    _max: FieldAnnotationMaxAggregate | null;
}
