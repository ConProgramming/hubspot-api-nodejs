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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BatchInputSimplePublicObjectBatchInput', 'model/BatchInputSimplePublicObjectId', 'model/BatchInputSimplePublicObjectInput', 'model/BatchReadInputSimplePublicObjectId', 'model/BatchResponseSimplePublicObject', 'model/CollectionResponse', 'model/CollectionResponseSimplePublicObject', 'model/CollectionResponseSimplePublicObjectId', 'model/CollectionResponseWithTotalSimplePublicObject', 'model/CompanyInput', 'model/ContactInput', 'model/DealInput', 'model/Error', 'model/ErrorDetail', 'model/Filter', 'model/NextPage', 'model/Paging', 'model/ProductInput', 'model/PublicObjectSearchRequest', 'model/SimplePublicObject', 'model/SimplePublicObjectBatchInput', 'model/SimplePublicObjectId', 'model/SimplePublicObjectInput', 'model/SortField', 'model/TicketInput', 'api/AssociationsApi', 'api/BasicApi', 'api/BatchApi', 'api/CreateNativeObjectsApi', 'api/SearchApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BatchInputSimplePublicObjectBatchInput'), require('./model/BatchInputSimplePublicObjectId'), require('./model/BatchInputSimplePublicObjectInput'), require('./model/BatchReadInputSimplePublicObjectId'), require('./model/BatchResponseSimplePublicObject'), require('./model/CollectionResponse'), require('./model/CollectionResponseSimplePublicObject'), require('./model/CollectionResponseSimplePublicObjectId'), require('./model/CollectionResponseWithTotalSimplePublicObject'), require('./model/CompanyInput'), require('./model/ContactInput'), require('./model/DealInput'), require('./model/Error'), require('./model/ErrorDetail'), require('./model/Filter'), require('./model/NextPage'), require('./model/Paging'), require('./model/ProductInput'), require('./model/PublicObjectSearchRequest'), require('./model/SimplePublicObject'), require('./model/SimplePublicObjectBatchInput'), require('./model/SimplePublicObjectId'), require('./model/SimplePublicObjectInput'), require('./model/SortField'), require('./model/TicketInput'), require('./api/AssociationsApi'), require('./api/BasicApi'), require('./api/BatchApi'), require('./api/CreateNativeObjectsApi'), require('./api/SearchApi'));
  }
}(function(ApiClient, BatchInputSimplePublicObjectBatchInput, BatchInputSimplePublicObjectId, BatchInputSimplePublicObjectInput, BatchReadInputSimplePublicObjectId, BatchResponseSimplePublicObject, CollectionResponse, CollectionResponseSimplePublicObject, CollectionResponseSimplePublicObjectId, CollectionResponseWithTotalSimplePublicObject, CompanyInput, ContactInput, DealInput, Error, ErrorDetail, Filter, NextPage, Paging, ProductInput, PublicObjectSearchRequest, SimplePublicObject, SimplePublicObjectBatchInput, SimplePublicObjectId, SimplePublicObjectInput, SortField, TicketInput, AssociationsApi, BasicApi, BatchApi, CreateNativeObjectsApi, SearchApi) {
  'use strict';

  /**
   * CRM_objects_such_as_companies_contacts_deals_line_items_products_tickets_and_quotes_are_native_objects_in_HubSpots_CRM__These_core_building_blocks_support_custom_properties_store_critical_information_and_play_a_central_role_in_the_HubSpot_application__Supported_Object_TypesThis_API_provides_access_to_collections_of_CRM_objects_which_return_a_map_of_property_names_to_values__Each_object_type_has_its_own_set_of_default_properties_which_can_be_found_by_exploring_the__CRM_Object_Properties_API_httpsdevelopers_hubspot_comdocsmethodscrm_propertiescrm_properties_overview__Object_Type__Properties_returned_by_default___________companies___name_domain____contacts___firstname_lastname_email____deals___dealname_amount_closedate_pipeline_dealstage____products___name_description_price____tickets___content_hs_pipeline_hs_pipeline_stage_hs_ticket_category_hs_ticket_priority_subject__Find_a_list_of_all_properties_for_an_object_type_using_the__CRM_Object_Properties_httpsdevelopers_hubspot_comdocsmethodscrm_propertiesget_properties_API__e_g__GET_httpsapi_hubapi_compropertiesv2companiesproperties__Change_the_properties_returned_in_the_response_using_the_properties_array_in_the_request_body_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CrmObjects = require('index'); // See note below*.
   * var xxxSvc = new CrmObjects.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CrmObjects.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CrmObjects.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CrmObjects.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BatchInputSimplePublicObjectBatchInput model constructor.
     * @property {module:model/BatchInputSimplePublicObjectBatchInput}
     */
    BatchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput,
    /**
     * The BatchInputSimplePublicObjectId model constructor.
     * @property {module:model/BatchInputSimplePublicObjectId}
     */
    BatchInputSimplePublicObjectId: BatchInputSimplePublicObjectId,
    /**
     * The BatchInputSimplePublicObjectInput model constructor.
     * @property {module:model/BatchInputSimplePublicObjectInput}
     */
    BatchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput,
    /**
     * The BatchReadInputSimplePublicObjectId model constructor.
     * @property {module:model/BatchReadInputSimplePublicObjectId}
     */
    BatchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId,
    /**
     * The BatchResponseSimplePublicObject model constructor.
     * @property {module:model/BatchResponseSimplePublicObject}
     */
    BatchResponseSimplePublicObject: BatchResponseSimplePublicObject,
    /**
     * The CollectionResponse model constructor.
     * @property {module:model/CollectionResponse}
     */
    CollectionResponse: CollectionResponse,
    /**
     * The CollectionResponseSimplePublicObject model constructor.
     * @property {module:model/CollectionResponseSimplePublicObject}
     */
    CollectionResponseSimplePublicObject: CollectionResponseSimplePublicObject,
    /**
     * The CollectionResponseSimplePublicObjectId model constructor.
     * @property {module:model/CollectionResponseSimplePublicObjectId}
     */
    CollectionResponseSimplePublicObjectId: CollectionResponseSimplePublicObjectId,
    /**
     * The CollectionResponseWithTotalSimplePublicObject model constructor.
     * @property {module:model/CollectionResponseWithTotalSimplePublicObject}
     */
    CollectionResponseWithTotalSimplePublicObject: CollectionResponseWithTotalSimplePublicObject,
    /**
     * The CompanyInput model constructor.
     * @property {module:model/CompanyInput}
     */
    CompanyInput: CompanyInput,
    /**
     * The ContactInput model constructor.
     * @property {module:model/ContactInput}
     */
    ContactInput: ContactInput,
    /**
     * The DealInput model constructor.
     * @property {module:model/DealInput}
     */
    DealInput: DealInput,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorDetail model constructor.
     * @property {module:model/ErrorDetail}
     */
    ErrorDetail: ErrorDetail,
    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter: Filter,
    /**
     * The NextPage model constructor.
     * @property {module:model/NextPage}
     */
    NextPage: NextPage,
    /**
     * The Paging model constructor.
     * @property {module:model/Paging}
     */
    Paging: Paging,
    /**
     * The ProductInput model constructor.
     * @property {module:model/ProductInput}
     */
    ProductInput: ProductInput,
    /**
     * The PublicObjectSearchRequest model constructor.
     * @property {module:model/PublicObjectSearchRequest}
     */
    PublicObjectSearchRequest: PublicObjectSearchRequest,
    /**
     * The SimplePublicObject model constructor.
     * @property {module:model/SimplePublicObject}
     */
    SimplePublicObject: SimplePublicObject,
    /**
     * The SimplePublicObjectBatchInput model constructor.
     * @property {module:model/SimplePublicObjectBatchInput}
     */
    SimplePublicObjectBatchInput: SimplePublicObjectBatchInput,
    /**
     * The SimplePublicObjectId model constructor.
     * @property {module:model/SimplePublicObjectId}
     */
    SimplePublicObjectId: SimplePublicObjectId,
    /**
     * The SimplePublicObjectInput model constructor.
     * @property {module:model/SimplePublicObjectInput}
     */
    SimplePublicObjectInput: SimplePublicObjectInput,
    /**
     * The SortField model constructor.
     * @property {module:model/SortField}
     */
    SortField: SortField,
    /**
     * The TicketInput model constructor.
     * @property {module:model/TicketInput}
     */
    TicketInput: TicketInput,
    /**
     * The AssociationsApi service constructor.
     * @property {module:api/AssociationsApi}
     */
    AssociationsApi: AssociationsApi,
    /**
     * The BasicApi service constructor.
     * @property {module:api/BasicApi}
     */
    BasicApi: BasicApi,
    /**
     * The BatchApi service constructor.
     * @property {module:api/BatchApi}
     */
    BatchApi: BatchApi,
    /**
     * The CreateNativeObjectsApi service constructor.
     * @property {module:api/CreateNativeObjectsApi}
     */
    CreateNativeObjectsApi: CreateNativeObjectsApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi
  };

  return exports;
}));
