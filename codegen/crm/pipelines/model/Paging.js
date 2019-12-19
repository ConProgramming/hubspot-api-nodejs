/**
 * CRM Pipelines
 * Pipelines represent distinct stages in a workflow, like closing a deal or servicing a support ticket. These endpoints provide access to read and modify pipelines in HubSpot. Pipelines support `deals` and `tickets` object types.  ## Pipeline ID validation  When calling endpoints that take pipelineId as a parameter, that ID must correspond to an existing, un-archived pipeline. Otherwise the request will fail with a `404 Not Found` response.
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
    define(['ApiClient', 'model/NextPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NextPage'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmPipelines) {
      root.CrmPipelines = {};
    }
    root.CrmPipelines.Paging = factory(root.CrmPipelines.ApiClient, root.CrmPipelines.NextPage);
  }
}(this, function(ApiClient, NextPage) {
  'use strict';



  /**
   * The Paging model module.
   * @module model/Paging
   * @version v3
   */

  /**
   * Constructs a new <code>Paging</code>.
   * @alias module:model/Paging
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Paging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Paging} obj Optional instance to populate.
   * @return {module:model/Paging} The populated <code>Paging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('next')) {
        obj['next'] = NextPage.constructFromObject(data['next']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NextPage} next
   */
  exports.prototype['next'] = undefined;



  return exports;
}));


