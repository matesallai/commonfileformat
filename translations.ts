// Copyright (c) Home Box Office, Inc. as an unpublished work. Neither this material nor any portion hereof may be
// copied or distributed without the express written consent of Home Box Office, Inc. This material also contains
// proprietary and confidential information of Home Box Office, Inc. and its suppliers, and may not be used by
// or disclosed to any person, in whole or in part, without the prior written consent of Home Box Office, Inc.

import { NumberFormat } from '../../../formats';
import { DataType } from '../../data-types/DataType';

/**
 * TEMPLATE CODE! DO NOT EDIT!
 *
 * If you make a mistake while editing this data structure, the assignment at the bottom of this file will start giving
 * an error. Should this occur, uncomment this version of the `TRANSLATION_SOURCE_SPEC` declaration and comment out the
 * untyped one immediately below. Your mistake will be kindly highlighted for you by TypeScript.
 */
// export const TRANSLATION_SOURCE_SPEC: ITranslationSourceData = {
/**
 * TEMPLATE CODE! DO NOT EDIT!
 *
 * Omitting the type declaration on TRANSLATION_SOURCE_SPEC allows us to do static type analysis on it that provides
 * type-safe invocations of the i18n runtime framework. However, it disables the automatic validation of object literals
 * that VSCode would normally provide. If TypeScript complains that `TRANSLATION_SOURCE_SPEC` is not a valid `ITranslationSource`,
 * comment out this declaration and uncomment the one above, and the resulting object literal validation will direct you
 * to the error(s) in the data structure.
 *
 * @public
 */
// eslint-disable-next-line @rushstack/typedef-var
export const TRANSLATION_SOURCE_SPEC = {
  // Example of the simplest possible message specification
  SimpleKey: {
    template: 'Your search results',
    notes: 'SimpleKey represents the simplest possible translation key specification structure'
  },

  // Example of a message specification with no parameters
  NoParamsKey: {
    template: 'This is an ICU template string with no parameters',
    notes: 'Some overall notes here'
  },

  // Example of a message specification with parameters
  HasParamsKey: {
    template: [
      '{resultsCount, plural,',
      '  =0 {No search results found ({someText})} ',
      '  =1 {One search result found ({someText})} ',
      '  other {{formattedResultsCount} search results found ({someText})}',
      '}'
    ],
    parameters: {
      resultsCount: {
        type: DataType.NUMBER,
        formatted: {
          formattedResultsCount: NumberFormat.INTEGER
        },
        notes: 'The number of search results returned. The value ranges between 0 and 50.'
      },
      someText: {
        type: DataType.TEXT,
        notes: 'Additional descriptive text for search results'
      }
    },
    notes: [
      'Header displayed above the page of search results. Can be multi-line. ',
      'Say "No search results" (or the equivalent) rather than "0 search results" ',
      'when no search results are returned.'
    ]
  },

  // Example of a message with an accessibility template option
  AccessibilityKey: {
    template: 'HBOMax.com',
    accessibilityTemplate: 'HBO Max.com',
    notes: 'The website "HBOMax.com", with a variant that is optimized for screen-reader software'
  },

  // Example of message variants by "design"
  AccessibilityKeyForAndroidTV: {
    template: 'HBOMax.com',
    accessibilityTemplate: 'H, B, O, max.com',
    notes: [
      'The website "HBOMax.com", with a variant that is optimized for screen-reader software. ',
      'Fire TV struggles reading urls w/ VoiceView, so we create an a11y string with ',
      'commas to make the url pronunciation better'
    ]
  },
  TizenTvAccessibilityKey: {
    template: 'HBOMax.com',
    accessibilityTemplate: 'HBO max dot com',
    notes: [
      'The website "HBOMax.com", with a variant that is optimized for screen-reader software. ',
      'Tizen TVs need the "dot" (the "." character) spelled out in word form'
    ]
  }
} as const;