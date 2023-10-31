import { InPlaintextState } from './states.mjs';

export const DefaultStateMachineOptions = {
  tagReplacementText: '',
  encodePlaintextTagDelimiters: true,
};

/** */
export class StateMachine {
  /** @private */
  state = undefined;

  /** @private */
  transitionFunction = undefined;

  constructor(partialOptions = {}) {
    this.state = new InPlaintextState({
      ...DefaultStateMachineOptions,
      ...partialOptions,
    });

    this.transitionFunction = ((next) => {
      this.state = next;
    }).bind(this);
  }

  /** @public
   * @param {string} text
   * @returns {string}
   */
  consume(text) {
    let outputBuffer = '';

    for (const character of text) {
      outputBuffer += this.state.consume(character, this.transitionFunction);
    }

    return outputBuffer;
  }
}

/** @param {string} text
 * @param {Partial<StateMachineOptions>} [options={}]
 * @returns {string}
 */
export function striptags(text, options = {}) {
  return new StateMachine(options).consume(text);
}

export default striptags;
