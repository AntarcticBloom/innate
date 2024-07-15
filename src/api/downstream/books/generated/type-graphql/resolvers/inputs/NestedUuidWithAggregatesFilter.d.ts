import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
export declare class NestedUuidWithAggregatesFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    not?: NestedUuidWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedStringFilter | undefined;
    _max?: NestedStringFilter | undefined;
}
