
import { HeroBlock, hero_template } from "./hero/hero";
import { TestimonialBlock, testimonial_template } from "./testimonial/testimonial";
import { GETitledParagraphBlock, getitledparagraph_template } from "./ge_titled_paragraph/ge_titled_paragraph";


export const PAGE_BLOCKS = {
  hero: {
    Component: HeroBlock,
    template: hero_template,
  },
  testimonial: {
    Component: TestimonialBlock,
    template: testimonial_template,
  },
  ge_titled_paragraph: {
    Component: GETitledParagraphBlock,
    template: getitledparagraph_template,
  },
};
