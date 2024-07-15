import { FieldAnnotationOrderByWithRelationInput } from "../../../inputs/FieldAnnotationOrderByWithRelationInput";
import { FieldAnnotationWhereInput } from "../../../inputs/FieldAnnotationWhereInput";
import { FieldAnnotationWhereUniqueInput } from "../../../inputs/FieldAnnotationWhereUniqueInput";
export declare class FindFirstFieldAnnotationArgs {
    where?: FieldAnnotationWhereInput | undefined;
    orderBy?: FieldAnnotationOrderByWithRelationInput[] | undefined;
    cursor?: FieldAnnotationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tableId" | "modelName" | "fieldId" | "fieldName" | "annotation" | "createdAt" | "updatedAt"> | undefined;
}
