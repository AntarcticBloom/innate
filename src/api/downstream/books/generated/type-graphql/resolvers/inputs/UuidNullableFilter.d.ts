import { NestedUuidNullableFilter } from "../inputs/NestedUuidNullableFilter";
export declare class UuidNullableFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    mode?: "default" | "insensitive" | undefined;
    not?: NestedUuidNullableFilter | undefined;
}
