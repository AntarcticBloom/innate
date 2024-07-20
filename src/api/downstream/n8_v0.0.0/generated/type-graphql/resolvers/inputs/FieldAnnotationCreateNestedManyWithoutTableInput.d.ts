import { FieldAnnotationCreateManyTableInputEnvelope } from "../inputs/FieldAnnotationCreateManyTableInputEnvelope";
import { FieldAnnotationCreateOrConnectWithoutTableInput } from "../inputs/FieldAnnotationCreateOrConnectWithoutTableInput";
import { FieldAnnotationCreateWithoutTableInput } from "../inputs/FieldAnnotationCreateWithoutTableInput";
import { FieldAnnotationWhereUniqueInput } from "../inputs/FieldAnnotationWhereUniqueInput";
export declare class FieldAnnotationCreateNestedManyWithoutTableInput {
    create?: FieldAnnotationCreateWithoutTableInput[] | undefined;
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutTableInput[] | undefined;
    createMany?: FieldAnnotationCreateManyTableInputEnvelope | undefined;
    connect?: FieldAnnotationWhereUniqueInput[] | undefined;
}
