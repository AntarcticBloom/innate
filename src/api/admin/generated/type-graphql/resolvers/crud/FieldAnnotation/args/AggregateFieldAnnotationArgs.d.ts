import { FieldAnnotationOrderByWithRelationInput } from "../../../inputs/FieldAnnotationOrderByWithRelationInput";
import { FieldAnnotationWhereInput } from "../../../inputs/FieldAnnotationWhereInput";
import { FieldAnnotationWhereUniqueInput } from "../../../inputs/FieldAnnotationWhereUniqueInput";
export declare class AggregateFieldAnnotationArgs {
    where?: FieldAnnotationWhereInput | undefined;
    orderBy?: FieldAnnotationOrderByWithRelationInput[] | undefined;
    cursor?: FieldAnnotationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
