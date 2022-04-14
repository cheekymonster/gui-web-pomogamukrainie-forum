/**
 * Documentation for ads portal
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Location } from './location';

export interface LawOfferSearchCriteria {
  location?: Location;
  helpMode?: Array<LawOfferSearchCriteria.HelpModeEnum>;
  helpKind?: LawOfferSearchCriteria.HelpKindEnum;
  language?: Array<LawOfferSearchCriteria.LanguageEnum>;
}
export namespace LawOfferSearchCriteria {
  export type HelpModeEnum = 'STATIONARY' | 'WITH_ACCESS' | 'ONLINE' | 'BY_EMAIL' | 'BY_PHONE';
  export const HelpModeEnum = {
    Stationary: 'STATIONARY' as HelpModeEnum,
    WithAccess: 'WITH_ACCESS' as HelpModeEnum,
    Online: 'ONLINE' as HelpModeEnum,
    ByEmail: 'BY_EMAIL' as HelpModeEnum,
    ByPhone: 'BY_PHONE' as HelpModeEnum,
  };
  export type HelpKindEnum = 'LABOUR_LAW' | 'IMMIGRATION_LAW' | 'FAMILY_LAW' | 'TAX_LAW' | 'CIVIL_LAW' | 'OTHER';
  export const HelpKindEnum = {
    LabourLaw: 'LABOUR_LAW' as HelpKindEnum,
    ImmigrationLaw: 'IMMIGRATION_LAW' as HelpKindEnum,
    FamilyLaw: 'FAMILY_LAW' as HelpKindEnum,
    TaxLaw: 'TAX_LAW' as HelpKindEnum,
    CivilLaw: 'CIVIL_LAW' as HelpKindEnum,
    Other: 'OTHER' as HelpKindEnum,
  };
  export type LanguageEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const LanguageEnum = {
    Ua: 'UA' as LanguageEnum,
    Pl: 'PL' as LanguageEnum,
    En: 'EN' as LanguageEnum,
    Ru: 'RU' as LanguageEnum,
  };
}