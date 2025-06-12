import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";

export class LanguageMessageEncoder<
	T extends Language,
	V extends Cipher<T>
> extends PartialMessageEncoder {
	static encodedCharsSum: number = 0;
	static decodedCharsSum: number = 0;
	static bothEncodedDecodedCharsSum: number = 0;
	constructor(language: T, cipher: V) {
		super(language, cipher);
	}
	encodeMessage(secretMessage: unknown): string {
		if (typeof secretMessage !== "string" || secretMessage.length === 0) {
			return "No message";
		}

		let strippedMessage = super.stripForbiddenSymbols(secretMessage);
		LanguageMessageEncoder.encodedCharsSum += strippedMessage.length;

		// TODO: check this.cipher.language.isCompatible or this.language.isCompatible !
		if (!this.cipher.language.isCompatibleToCharset(strippedMessage)) {
			return "Message not compatible";
		}

		return this.cipher.encipher(strippedMessage);
	}

	decodeMessage(secretMessage: unknown): string {
		if (typeof secretMessage !== "string" || secretMessage.length === 0) {
			return "No message";
		}

		let strippedMessage = super.stripForbiddenSymbols(secretMessage);
		LanguageMessageEncoder.decodedCharsSum += strippedMessage.length;

		if (!this.cipher.language.isCompatibleToCharset(strippedMessage)) {
			return "Message not compatible";
		}

		return this.cipher.decipher(strippedMessage);
	}

	totalProcessedCharacters(type: "Encoded" | "Decoded" | "Both"): string {
		let result = 0;
		if (type === "Encoded") {
			result = LanguageMessageEncoder.encodedCharsSum;
		} else if (type === "Decoded") {
			result = LanguageMessageEncoder.decodedCharsSum;
		} else if (type === "Both") {
			result =
				LanguageMessageEncoder.encodedCharsSum +
				LanguageMessageEncoder.decodedCharsSum;
		}

		return `Total processed characters count: ${result}`;
	}
}
