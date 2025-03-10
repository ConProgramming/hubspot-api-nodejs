/**
 * Tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ValueWithTimestamp {
    'value': string;
    'timestamp': Date;
    'sourceType': string;
    'sourceId'?: string;
    'sourceLabel'?: string;
    'updatedByUserId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "sourceType",
            "baseName": "sourceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceId",
            "baseName": "sourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceLabel",
            "baseName": "sourceLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedByUserId",
            "baseName": "updatedByUserId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ValueWithTimestamp.attributeTypeMap;
    }

    public constructor() {
    }
}

