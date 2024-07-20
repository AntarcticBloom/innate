import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";
import { NestedUuidNullableWithAggregatesFilter } from "../inputs/NestedUuidNullableWithAggregatesFilter";
export declare class UuidNullableWithAggregatesFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    mode?: "default" | "insensitive" | undefined;
    not?: NestedUuidNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedStringNullableFilter | undefined;
    _max?: NestedStringNullableFilter | undefined;
}
