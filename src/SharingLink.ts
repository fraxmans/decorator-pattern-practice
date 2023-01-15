import { PDFGeneratorOptionDecorator } from "./PDFGeneratorOptionDecorator";

export class SharingLink extends PDFGeneratorOptionDecorator {
  generate(): void {
    console.log('Generate sharing link');
    super.generate();
  }
}
