import { FieldAnnotationCreateManyFieldInputEnvelope } from "../inputs/FieldAnnotationCreateManyFieldInputEnvelope";
import { FieldAnnotationCreateOrConnectWithoutFieldInput } from "../inputs/FieldAnnotationCreateOrConnectWithoutFieldInput";
import { FieldAnnotationCreateWithoutFieldInput } from "../inputs/FieldAnnotationCreateWithoutFieldInput";
import { FieldAnnotationWhereUniqueInput } from "../inputs/FieldAnnotationWhereUniqueInput";
export declare class FieldAnnotationCreateNestedManyWithoutFieldInput {
    create?: FieldAnnotationCreateWithoutFieldInput[] | undefined;
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutFieldInput[] | undefined;
    createMany?: FieldAnnotationCreateManyFieldInputEnvelope | undefined;
    connect?: FieldAnnotationWhereUniqueInput[] | undefined;
}
