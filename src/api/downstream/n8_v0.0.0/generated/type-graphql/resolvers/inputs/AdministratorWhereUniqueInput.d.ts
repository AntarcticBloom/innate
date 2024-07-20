import { AdministratorWhereInput } from "../inputs/AdministratorWhereInput";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
export declare class AdministratorWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
    AND?: AdministratorWhereInput[] | undefined;
    OR?: AdministratorWhereInput[] | undefined;
    NOT?: AdministratorWhereInput[] | undefined;
    banned?: BoolNullableFilter | undefined;
    verified?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
