import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedUuidWithAggregatesFilter } from "../inputs/NestedUuidWithAggregatesFilter";
export declare class UuidWithAggregatesFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    mode?: "default" | "insensitive" | undefined;
    not?: NestedUuidWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedStringFilter | undefined;
    _max?: NestedStringFilter | undefined;
}
