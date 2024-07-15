import { FieldAnnotationCreateManyTableInputEnvelope } from "../inputs/FieldAnnotationCreateManyTableInputEnvelope";
import { FieldAnnotationCreateOrConnectWithoutTableInput } from "../inputs/FieldAnnotationCreateOrConnectWithoutTableInput";
import { FieldAnnotationCreateWithoutTableInput } from "../inputs/FieldAnnotationCreateWithoutTableInput";
import { FieldAnnotationScalarWhereInput } from "../inputs/FieldAnnotationScalarWhereInput";
import { FieldAnnotationUpdateManyWithWhereWithoutTableInput } from "../inputs/FieldAnnotationUpdateManyWithWhereWithoutTableInput";
import { FieldAnnotationUpdateWithWhereUniqueWithoutTableInput } from "../inputs/FieldAnnotationUpdateWithWhereUniqueWithoutTableInput";
import { FieldAnnotationUpsertWithWhereUniqueWithoutTableInput } from "../inputs/FieldAnnotationUpsertWithWhereUniqueWithoutTableInput";
import { FieldAnnotationWhereUniqueInput } from "../inputs/FieldAnnotationWhereUniqueInput";
export declare class FieldAnnotationUpdateManyWithoutTableNestedInput {
    create?: FieldAnnotationCreateWithoutTableInput[] | undefined;
    connectOrCreate?: FieldAnnotationCreateOrConnectWithoutTableInput[] | undefined;
    upsert?: FieldAnnotationUpsertWithWhereUniqueWithoutTableInput[] | undefined;
    createMany?: FieldAnnotationCreateManyTableInputEnvelope | undefined;
    set?: FieldAnnotationWhereUniqueInput[] | undefined;
    disconnect?: FieldAnnotationWhereUniqueInput[] | undefined;
    delete?: FieldAnnotationWhereUniqueInput[] | undefined;
    connect?: FieldAnnotationWhereUniqueInput[] | undefined;
    update?: FieldAnnotationUpdateWithWhereUniqueWithoutTableInput[] | undefined;
    updateMany?: FieldAnnotationUpdateManyWithWhereWithoutTableInput[] | undefined;
    deleteMany?: FieldAnnotationScalarWhereInput[] | undefined;
}
