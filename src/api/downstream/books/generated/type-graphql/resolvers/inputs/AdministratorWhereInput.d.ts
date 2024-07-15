import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UuidFilter } from "../inputs/UuidFilter";
export declare class AdministratorWhereInput {
    AND?: AdministratorWhereInput[] | undefined;
    OR?: AdministratorWhereInput[] | undefined;
    NOT?: AdministratorWhereInput[] | undefined;
    id?: UuidFilter | undefined;
    email?: StringFilter | undefined;
    banned?: BoolNullableFilter | undefined;
    username?: StringFilter | undefined;
    verified?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
