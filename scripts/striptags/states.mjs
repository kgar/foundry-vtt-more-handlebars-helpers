/** @param {string} character
 * @returns {character is SpaceCharacter}
 */
function isSpace(character) {
  return (
    character == ' ' ||
    character == '\n' ||
    character == '\r' ||
    character == '\t'
  );
}

/** @param {string} character
 * @returns {character is QuoteCharacter}
 */
function isQuote(character) {
  return character == '"' || character == "'";
}

const TAG_START = '<';
const TAG_END = '>';

const ENCODED_TAG_START = '&lt;';
const ENCODED_TAG_END = '&gt;';

/** */
export class InPlaintextState {
  options;
  constructor(options) {
    this.options = options;
  }

  /** @param {string} character
   * @param {InPlaintextStateTransitionFunction} transition
   * @returns {string}
   */
  consume(character, transition) {
    if (character == TAG_START) {
      transition(new InTagNameState(this.options));

      return '';
    } else if (
      character == TAG_END &&
      this.options.encodePlaintextTagDelimiters
    ) {
      return ENCODED_TAG_END;
    }

    return character;
  }
}

/** */
export class InTagNameState {
  options;
  /** @private
   * @default ""
   */
  nameBuffer = '';
  /** @private
   * @default false
   */
  isClosingTag = false;

  constructor(options) {
    this.options = options;
  }

  /** @param {string} character
   * @param {InTagNameStateTransitionFunction} transition
   * @returns {string}
   */
  consume(character, transition) {
    if (this.nameBuffer.length == 0) {
      if (isSpace(character)) {
        transition(new InPlaintextState(this.options));

        return (
          (this.options.encodePlaintextTagDelimiters
            ? ENCODED_TAG_START
            : '<') + character
        );
      }

      if (character == '/') {
        this.isClosingTag = true;

        return '';
      }
    }

    if (isSpace(character)) {
      if (this.isNameBufferAnAllowedTag()) {
        transition(new InTagState(0 /* TagMode.Allowed */, this.options));

        return (
          TAG_START +
          (this.isClosingTag ? '/' : '') +
          this.nameBuffer +
          character
        );
      } else {
        transition(new InTagState(1 /* TagMode.Disallowed */, this.options));

        return this.options.tagReplacementText;
      }
    }

    if (character == TAG_START) {
      this.nameBuffer += ENCODED_TAG_START;

      return '';
    }

    if (character == TAG_END) {
      transition(new InPlaintextState(this.options));

      if (this.isNameBufferAnAllowedTag()) {
        return (
          TAG_START +
          (this.isClosingTag ? '/' : '') +
          this.nameBuffer +
          character
        );
      } else {
        return this.options.tagReplacementText;
      }
    }

    if (character == '-' && this.nameBuffer == '!-') {
      transition(new InCommentState(this.options));

      return '';
    }

    this.nameBuffer += character;

    return '';
  }

  /** @private
   * @returns {boolean}
   */
  isNameBufferAnAllowedTag() {
    const tagName = this.nameBuffer.toLowerCase();

    if (this.options.allowedTags) {
      return this.options.allowedTags.has(tagName);
    } else if (this.options.disallowedTags) {
      return !this.options.disallowedTags.has(tagName);
    } else {
      return false;
    }
  }
}

/** */
export class InTagState {
  mode;
  options;
  constructor(mode, options) {
    this.mode = mode;
    this.options = options;
  }

  /** @param {string} character
   * @param {InTagStateTransitionFunction<T>} transition
   * @returns {string}
   */
  consume(character, transition) {
    if (character == TAG_END) {
      transition(new InPlaintextState(this.options));
    } else if (isQuote(character)) {
      transition(
        new InQuotedStringInTagState(this.mode, character, this.options)
      );
    }

    if (this.mode == 1 /* TagMode.Disallowed */) {
      return '';
    }

    if (character == TAG_START) {
      return ENCODED_TAG_START;
    } else {
      return character;
    }
  }
}

/** */
export class InQuotedStringInTagState {
  mode;
  quoteCharacter;
  options;
  constructor(mode, quoteCharacter, options) {
    this.mode = mode;
    this.quoteCharacter = quoteCharacter;
    this.options = options;
  }

  /** @param {string} character
   * @param {InQuotedStringInTagStateTransitionFunction<T>} transition
   * @returns {string}
   */
  consume(character, transition) {
    if (character == this.quoteCharacter) {
      transition(new InTagState(this.mode, this.options));
    }

    if (this.mode == 1 /* TagMode.Disallowed */) {
      return '';
    }

    if (character == TAG_START) {
      return ENCODED_TAG_START;
    } else if (character == TAG_END) {
      return ENCODED_TAG_END;
    } else {
      return character;
    }
  }
}

/** */
export class InCommentState {
  options;
  /** @private
   * @default 0
   */
  consecutiveHyphens = 0;

  constructor(options) {
    this.options = options;
  }

  /** @param {string} character
   * @param {InCommentStateTransitionFunction} transition
   * @returns {string}
   */
  consume(character, transition) {
    if (character == '>' && this.consecutiveHyphens >= 2) {
      transition(new InPlaintextState(this.options));
    } else if (character == '-') {
      this.consecutiveHyphens++;
    } else {
      this.consecutiveHyphens = 0;
    }

    return '';
  }
}

/** @typedef {" " | "\n" | "\r" | "\t"} SpaceCharacter */
/** @typedef {'"' | "'"} QuoteCharacter */
/** @typedef {(next: State) => void} StateTransitionFunction */
/** @typedef {(next: InTagNameState) => void} InPlaintextStateTransitionFunction */
/**
 * @typedef {(
 *     next:
 *         | InPlaintextState
 *         | InTagState<TagMode.Allowed>
 *         | InTagState<TagMode.Disallowed>
 *         | InCommentState,
 * ) => void} InTagNameStateTransitionFunction
 */
/**
 * @typedef {(
 *     next: InPlaintextState | InQuotedStringInTagState<T>,
 * ) => void} InTagStateTransitionFunction
 * @template {TagMode} T
 */
/** @typedef {(next: InTagState<T>) => void} InQuotedStringInTagStateTransitionFunction
 * @template {TagMode} T
 */
/** @typedef {(next: InPlaintextState) => void} InCommentStateTransitionFunction */

/** @typedef {Object} StateMachineOptions
 * @property {Set<string>} [allowedTags]
 * @property {Set<string>} [disallowedTags]
 * @property {string} tagReplacementText
 * @property {boolean} encodePlaintextTagDelimiters
 */
/** @typedef {Object} State */
