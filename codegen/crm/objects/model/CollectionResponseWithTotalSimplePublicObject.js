/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are native objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Paging', 'model/SimplePublicObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paging'), require('./SimplePublicObject'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmObjects) {
      root.CrmObjects = {};
    }
    root.CrmObjects.CollectionResponseWithTotalSimplePublicObject = factory(root.CrmObjects.ApiClient, root.CrmObjects.Paging, root.CrmObjects.SimplePublicObject);
  }
}(this, function(ApiClient, Paging, SimplePublicObject) {
  'use strict';



  /**
   * The CollectionResponseWithTotalSimplePublicObject model module.
   * @module model/CollectionResponseWithTotalSimplePublicObject
   * @version v3
   */

  /**
   * Constructs a new <code>CollectionResponseWithTotalSimplePublicObject</code>.
   * @alias module:model/CollectionResponseWithTotalSimplePublicObject
   * @class
   * @param total {Number} The number of available results
   * @param results {Array.<module:model/SimplePublicObject>} 
   */
  var exports = function(total, results) {
    var _this = this;

    _this['total'] = total;
    _this['results'] = results;
  };

  /**
   * Constructs a <code>CollectionResponseWithTotalSimplePublicObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionResponseWithTotalSimplePublicObject} obj Optional instance to populate.
   * @return {module:model/CollectionResponseWithTotalSimplePublicObject} The populated <code>CollectionResponseWithTotalSimplePublicObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [SimplePublicObject]);
      }
      if (data.hasOwnProperty('paging')) {
        obj['paging'] = Paging.constructFromObject(data['paging']);
      }
    }
    return obj;
  }

  /**
   * The number of available results
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Array.<module:model/SimplePublicObject>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * @member {module:model/Paging} paging
   */
  exports.prototype['paging'] = undefined;



  return exports;
}));


