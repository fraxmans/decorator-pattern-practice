import { PDFGeneratorOptionDecorator } from "./PDFGeneratorOptionDecorator";

export class Watermark extends PDFGeneratorOptionDecorator {
  generate(): void {
    console.log('Add watermark ......');
    return super.generate();
  }
}
