import { FieldAnnotationOrderByWithAggregationInput } from "../../../inputs/FieldAnnotationOrderByWithAggregationInput";
import { FieldAnnotationScalarWhereWithAggregatesInput } from "../../../inputs/FieldAnnotationScalarWhereWithAggregatesInput";
import { FieldAnnotationWhereInput } from "../../../inputs/FieldAnnotationWhereInput";
export declare class GroupByFieldAnnotationArgs {
    where?: FieldAnnotationWhereInput | undefined;
    orderBy?: FieldAnnotationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tableId" | "modelName" | "fieldId" | "fieldName" | "annotation" | "createdAt" | "updatedAt">;
    having?: FieldAnnotationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
