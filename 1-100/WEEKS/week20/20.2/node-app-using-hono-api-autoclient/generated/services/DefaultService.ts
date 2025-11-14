/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @param id
     * @returns any User detail
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<{
        id: string;
        name: string;
        age: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any User successfully created
     * @throws ApiError
     */
    public static postUsers(
        requestBody?: {
            id: string;
        },
    ): CancelablePromise<{
        id: string;
        name: string;
        age: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
