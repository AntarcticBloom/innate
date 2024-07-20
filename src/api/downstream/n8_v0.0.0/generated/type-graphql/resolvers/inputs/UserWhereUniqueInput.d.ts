import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    banned?: BoolNullableFilter | undefined;
    verified?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
