import { FieldCreateManyTableInputEnvelope } from "../inputs/FieldCreateManyTableInputEnvelope";
import { FieldCreateOrConnectWithoutTableInput } from "../inputs/FieldCreateOrConnectWithoutTableInput";
import { FieldCreateWithoutTableInput } from "../inputs/FieldCreateWithoutTableInput";
import { FieldWhereUniqueInput } from "../inputs/FieldWhereUniqueInput";
export declare class FieldCreateNestedManyWithoutTableInput {
    create?: FieldCreateWithoutTableInput[] | undefined;
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput[] | undefined;
    createMany?: FieldCreateManyTableInputEnvelope | undefined;
    connect?: FieldWhereUniqueInput[] | undefined;
}
