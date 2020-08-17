/*
 * Copyright (c) 2020 Oracle and/or its affiliates.
 *
 * Licensed under the Universal Permissive License v 1.0 as shown at
 * http://oss.oracle.com/licenses/upl.
 */

import { ValueExtractor } from '../extractor/'
import { ComparisonFilter } from '.'
import { internal } from './package-internal'

/**
 * Filter which tests Collection or Object array value returned from
 * a method invocation for containment of any value in a Set.
 *
 * @typeParam T  the type of the input argument to the filter
 * @typeParam E  the type of the extracted attribute to use for comparison
 */
export class ContainsAnyFilter<T = any, E = any>
  extends ComparisonFilter<T, E, Set<any>> {

  /**
   * Construct an ContainsAllFilter for testing containment of any value within the given Set.
   *
   * @param extractorOrMethod  the {@link ValueExtractor} used by this filter or the name of the method to invoke
   *                           via reflection
   *
   * @param setValues the {@link Set} of values that a Collection or array is tested to contain
   */
  constructor (extractorOrMethod: ValueExtractor<T, E> | string, setValues: Set<any>) {
    super(internal.filterName('ContainsAnyFilter'), extractorOrMethod, setValues)
  }
}