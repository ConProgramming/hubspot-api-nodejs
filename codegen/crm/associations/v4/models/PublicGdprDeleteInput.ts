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


export class PublicGdprDeleteInput {
    'idProperty'?: string;
    'objectId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "idProperty",
            "baseName": "idProperty",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicGdprDeleteInput.attributeTypeMap;
    }

    public constructor() {
    }
}

