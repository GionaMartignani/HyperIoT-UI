/**
 * OpenAPI spec version: 2.0.0
 * Contact: users@acsoftware.it
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Bundle } from './bundle';
import { DictionaryStringObject } from './dictionaryStringObject';


export interface ServiceReferenceObject { 
    propertyKeys?: Array<string>;
    usingBundles?: Array<Bundle>;
    bundle?: Bundle;
    properties?: DictionaryStringObject;
}
