/**
 * Quotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FilterGroup } from './filterGroup';

export class PublicObjectSearchRequest {
    'filterGroups': Array<FilterGroup>;
    'sorts': Array<string>;
    'query'?: string;
    'properties': Array<string>;
    'limit': number;
    'after': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filterGroups",
            "baseName": "filterGroups",
            "type": "Array<FilterGroup>"
        },
        {
            "name": "sorts",
            "baseName": "sorts",
            "type": "Array<string>"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<string>"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "after",
            "baseName": "after",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PublicObjectSearchRequest.attributeTypeMap;
    }
}

