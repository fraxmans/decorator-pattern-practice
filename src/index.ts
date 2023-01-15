import { BasePDFGenerator } from "./BasePDFGenerator";
import { Signature } from "./Signature";
import { SharingLink } from "./SharingLink";
import { Watermark } from "./Watermark";

let announcement: BasePDFGenerator = new BasePDFGenerator();
announcement = new SharingLink(announcement);
console.log('=====Start Generating Announcement PDF=====');
announcement.generate();
console.log('=====End Generating Announcement PDF=====\n');

let interalReport: BasePDFGenerator = new BasePDFGenerator();
interalReport = new Watermark(interalReport);
interalReport = new SharingLink(interalReport);
console.log('=====Start Generating Internal Report PDF=====');
interalReport.generate();
console.log('=====End Generating Internal Report PDF=====\n');

let productRecipe: BasePDFGenerator = new BasePDFGenerator();
productRecipe = new Signature(productRecipe);
productRecipe = new Watermark(productRecipe);
console.log('=====Start Generating Product Recipe PDF=====');
productRecipe.generate();
console.log('=====End Generating Product Recipe PDF=====\n');
