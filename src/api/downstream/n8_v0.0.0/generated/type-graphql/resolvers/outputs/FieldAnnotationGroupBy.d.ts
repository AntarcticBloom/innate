import { FieldAnnotationCountAggregate } from "../outputs/FieldAnnotationCountAggregate";
import { FieldAnnotationMaxAggregate } from "../outputs/FieldAnnotationMaxAggregate";
import { FieldAnnotationMinAggregate } from "../outputs/FieldAnnotationMinAggregate";
export declare class FieldAnnotationGroupBy {
    id: string;
    tableId: string | null;
    modelName: string;
    fieldId: string | null;
    fieldName: string;
    annotation: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FieldAnnotationCountAggregate | null;
    _min: FieldAnnotationMinAggregate | null;
    _max: FieldAnnotationMaxAggregate | null;
}
