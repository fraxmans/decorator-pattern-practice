import { PDFGeneratorOptionDecorator } from "./PDFGeneratorOptionDecorator";

export class Signature extends PDFGeneratorOptionDecorator {
  generate(): void {
    console.log('Add signature');
    super.generate();
  }
}
