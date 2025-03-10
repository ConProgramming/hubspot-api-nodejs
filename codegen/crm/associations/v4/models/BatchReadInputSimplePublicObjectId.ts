/**
 * CrmPublicObjectsService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObjectId } from '../models/SimplePublicObjectId';

export class BatchReadInputSimplePublicObjectId {
    'propertiesWithHistory': Array<string>;
    'idProperty'?: string;
    'inputs': Array<SimplePublicObjectId>;
    'properties': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "propertiesWithHistory",
            "baseName": "propertiesWithHistory",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "idProperty",
            "baseName": "idProperty",
            "type": "string",
            "format": ""
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectId>",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchReadInputSimplePublicObjectId.attributeTypeMap;
    }

    public constructor() {
    }
}

