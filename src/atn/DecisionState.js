/*
 * Copyright (c) The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import { ATNState } from "./ATNState.js";

export class DecisionState extends ATNState {
    constructor() {
        super();
        this.decision = -1;
        this.nonGreedy = false;
        return this;
    }
}