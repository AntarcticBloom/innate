import { NestedUuidFilter } from "../inputs/NestedUuidFilter";
export declare class UuidFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    mode?: "default" | "insensitive" | undefined;
    not?: NestedUuidFilter | undefined;
}
