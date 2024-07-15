export declare class Administrator {
    id: string;
    hash?: string;
    salt?: string;
    magicLinkToken?: string | null;
    email: string;
    banned?: boolean | null;
    username: string;
    verified?: boolean | null;
    createdAt: Date;
    updatedAt: Date;
}
