import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../Customers/CustomerList";

export const ApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),

    // Get single user by id
    getUser: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),

    // Create user
    createUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

//  Export hooks
export const { useGetUsersQuery, useGetUserQuery, useCreateUserMutation } =
  ApiSlice;
