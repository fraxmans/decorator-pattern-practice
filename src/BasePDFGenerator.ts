import { PDFGenerator } from "./interface/PDFGenerator";

export class BasePDFGenerator implements PDFGenerator {
  generate(): void {
    console.log('Generate PDF......');
  }
}
