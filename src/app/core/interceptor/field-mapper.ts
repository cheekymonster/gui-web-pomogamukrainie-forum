import * as pl from '@app/core/translations/pl_PL';
import { AccommodationOffer, JobOffer, MaterialAidOffer, TransportOffer } from '@app/core/api';

type PL_KEYS = keyof typeof pl.default;

/**
 * we add omit and required, we must know the newly added field in api is properly mapped to translate
 */
type FieldAccommodationOfferMapper = {
  [P in keyof Required<Omit<AccommodationOffer, 'id' | 'userFirstName' | 'type'>>]: PL_KEYS;
};
type FieldMaterialAidOfferMapper = {
  [P in keyof Required<Omit<MaterialAidOffer, 'id' | 'userFirstName' | 'type'>>]: PL_KEYS;
};
type FieldTransportOfferMapper = {
  [P in keyof Required<Omit<TransportOffer, 'id' | 'userFirstName' | 'type'>>]: PL_KEYS;
};
type FieldJobOfferMapper = {
  [P in keyof Required<Omit<JobOffer, 'id' | 'userFirstName' | 'type'>>]: PL_KEYS;
};
// other models

export type AllOffersMapper = FieldAccommodationOfferMapper &
  FieldMaterialAidOfferMapper &
  FieldTransportOfferMapper &
  FieldJobOfferMapper;

export const offerMapper: AllOffersMapper = {
  title: 'LABEL_OFFER_TITLE',
  description: 'LABEL_OFFER_DESCRIPTION',
  phoneCountryCode: 'LABEL_PHONE_COUNTRY_CODE',
  phoneNumber: 'LABEL_PHONE_NUMBER',
  guests: 'NUMBER_OF_PEOPLE',
  lengthOfStay: 'LABEL_LENGTH_OF_STAY',
  hostLanguage: 'LABEL_HOST_LANG',
  location: 'LOCATION',
  modifiedDate: 'LABEL_DATE',
  category: 'TYPE_OF_SUPPORT',
  origin: 'LOCATION_FROM',
  destination: 'LOCATION_TO',
  capacity: 'LABEL_HOW_MANY_PEOPLE_UCAN_TAKE',
  transportDate: 'LABEL_DATE',
  mode: 'LABEL_JOB_MODE',
  industry: 'LABEL_INDUSTRY',
  workTime: 'LABEL_WORK_TIME',
  contractType: 'LABEL_CONTRACT_TYPE',
  language: 'LABEL_JOB_LANG',
};
