/*
 * Copyright (c) The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import { IntStream } from "./IntStream.js";
import { Interval } from "./misc/Interval.js";

/**
 * A source of characters for an ANTLR lexer.
 *
 * Note: CharStream is an interface in Java, but uses the CharStream class in JavaScript.
 */
export declare interface CharStream extends IntStream {
    /**
     * This method returns the text for a range of characters within this input
     * stream. This method is guaranteed to not throw an exception if the
     * specified {@code interval} lies entirely within a marked range. For more
     * information about marked ranges, see {@link IntStream#mark}.
     *
     * @param interval an interval within the stream
     * @returns the text of the specified interval
     *
     * @throws NullPointerException if {@code interval} is {@code null}
     * @throws IllegalArgumentException if {@code interval.a < 0}, or if
     * {@code interval.b < interval.a - 1}, or if {@code interval.b} lies at or
     * past the end of the stream
     * @throws UnsupportedOperationException if the stream does not support
     * getting the text of the specified interval
     */
    getText(interval: Interval): string;

    reset(): void;
    toString(): string;
}