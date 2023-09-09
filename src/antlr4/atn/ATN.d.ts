/*
 * Copyright (c) The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import { IntervalSet } from "../misc/IntervalSet.js";
import { RuleContext } from "../context/RuleContext.js";
import { ATNState } from "../state/ATNState.js";
import { DecisionState } from "../state/DecisionState.js";
import { RuleStartState } from "../state/RuleStartState.js";
import { RuleStopState } from "../state/RuleStopState.js";
import { LexerAction } from "../action/LexerAction.js";

export declare class ATN {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static INVALID_ALT_NUMBER: number;

    public readonly grammarType: number;
    public readonly maxTokenType: number;

    public readonly states: ATNState[];
    public readonly decisionToState: DecisionState[];
    public readonly ruleToStartState: RuleStartState[];
    public readonly ruleToStopState: RuleStopState[] | null;
    public readonly modeNameToStartState: { [name: string]: RuleStartState; };
    public readonly ruleToTokenType: number[] | null;
    public readonly lexerActions: LexerAction[] | null;
    public readonly modeToStartState: RuleStartState[];

    public getExpectedTokens(stateNumber: number, ctx: RuleContext): IntervalSet;
    public nextTokens(atnState: ATNState, ctx?: RuleContext): IntervalSet;
}