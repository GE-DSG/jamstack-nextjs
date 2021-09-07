
import { HeroBlock, hero_template } from "./hero";
import {
  TestimonialBlock,
  testimonial_template,
} from "./testimonial";


export const PAGE_BLOCKS = {
  hero: {
    Component: HeroBlock,
    template: hero_template,
  },
  testimonial: {
    Component: TestimonialBlock,
    template: testimonial_template,
  },
};
