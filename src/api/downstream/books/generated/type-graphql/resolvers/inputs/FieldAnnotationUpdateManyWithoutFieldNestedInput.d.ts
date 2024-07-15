import { FieldAnnotationCreateManyFieldInputEnvelope } from "../inputs/FieldAnnotationCreateManyFieldInputEnvelope";
import { FieldAnnotationCreateOrConnectWithoutFieldInput } from "../inputs/FieldAnnotationCreateOrConnectWithoutFieldInput";
import { FieldAnnotationCreateWithoutFieldInput } from "../inputs/FieldAnnotationCreateWithoutFieldInput";
import { FieldAnnotationScalarWhereInput } from "../inputs/FieldAnnotationScalarWhereInput";
import { FieldAnnotationUpdateManyWithWhereWithoutFieldInput } from "../inputs/FieldAnnotationUpdateManyWithWhereWithoutFieldInput";
import { FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput } from "../inputs/FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput";
import { FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput } from "../inputs/FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput";
import { FieldAnnotationWhereUniqueInput } from "../inputs/FieldAnnotationWhereUniqueInput";
export declare class FieldAnnotationUpdateManyWithoutFieldNestedInput {
    create?: FieldAnnotationCreateWithoutFieldInput[] | undefined;
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutFieldInput[] | undefined;
    upsert?: FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput[] | undefined;
    createMany?: FieldAnnotationCreateManyFieldInputEnvelope | undefined;
    set?: FieldAnnotationWhereUniqueInput[] | undefined;
    disconnect?: FieldAnnotationWhereUniqueInput[] | undefined;
    delete?: FieldAnnotationWhereUniqueInput[] | undefined;
    connect?: FieldAnnotationWhereUniqueInput[] | undefined;
    update?: FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput[] | undefined;
    updateMany?: FieldAnnotationUpdateManyWithWhereWithoutFieldInput[] | undefined;
    deleteMany?: FieldAnnotationScalarWhereInput[] | undefined;
}
