"use server";

import { ID, Query } from "node-appwrite";
import { API_KEY, ENDPOINT, PROJECT_ID, users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    console.log("tes inside action");
    console.log(user);

    try {
        // console.log("try", ID.unique());
        // const userList = await users.list();

        // console.log("userList", userList);

        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        );

        console.log({ newUser });

        return parseStringify(newUser);
    } catch (e: any) {
        console.log("catch error");
        if (e && e?.code == 409) {
            const documents = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return documents?.users[0];
        }

        console.log(e);
    }
};

export const getuser = async (userId: string) => {
    try {
        const user = await users.get(userId);

        return parseStringify(user);
    } catch (error) {
        console.log(error);
    }
};
