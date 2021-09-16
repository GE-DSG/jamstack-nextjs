
import { HeroBlock, hero_template } from "./hero/hero";
import { TestimonialBlock, testimonial_template } from "./testimonial/testimonial";
import { GETitledParagraphBlock, getitledparagraph_template } from "./ge-titled-paragraph/ge-titled-paragraph";
import { GEContentLeftRightImageBlock, GEContentLeftRightImage_template } from "./ge-content-left-right-image/ge-content-left-right-image"
import { GEGridBlock, gegrid_template } from "./ge-grid/ge-grid";

export const PAGE_BLOCKS = {
  ge_content_left_right_image: {
    Component: GEContentLeftRightImageBlock,
    template: GEContentLeftRightImage_template,
  },
  ge_titled_paragraph: {
    Component: GETitledParagraphBlock,
    template: getitledparagraph_template,
  },
  hero: {
    Component: HeroBlock,
    template: hero_template,
  },
  testimonial: {
    Component: TestimonialBlock,
    template: testimonial_template,
  },
  ge_grid: {
    Component: GEGridBlock,
    template: gegrid_template,
  },
};
