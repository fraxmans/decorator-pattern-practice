import { PDFGenerator } from './interface/PDFGenerator';

export class PDFGeneratorOptionDecorator implements PDFGenerator {
  protected pdfGenerator: PDFGenerator;

  constructor(pdfGenerator: PDFGenerator) {
    this.pdfGenerator = pdfGenerator;
  }

  generate(): void {
    return this.pdfGenerator.generate();
  }
}
