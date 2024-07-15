import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";
export declare class FieldScalarWhereInput {
    AND?: FieldScalarWhereInput[] | undefined;
    OR?: FieldScalarWhereInput[] | undefined;
    NOT?: FieldScalarWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    tableId?: UuidNullableFilter | undefined;
    name?: StringFilter | undefined;
    type?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
