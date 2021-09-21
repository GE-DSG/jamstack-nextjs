
import { GEHeroPrimaryBlock, geheroprimary_template } from "./ge-hero-primary/ge-hero-primary";
import { TestimonialBlock, testimonial_template } from "./testimonial/testimonial";
import { GETitledParagraphBlock, getitledparagraph_template } from "./ge-titled-paragraph/ge-titled-paragraph";
import { GEContentLeftRightImageBlock, GEContentLeftRightImage_template } from "./ge-content-left-right-image/ge-content-left-right-image"
import { GEGridBlock, gegrid_template } from "./ge-grid/ge-grid";
import { GESpacerBlock, gespacer_template } from "./ge-spacer/ge-spacer";


export const PAGE_BLOCKS = {
  ge_content_left_right_image: {
    Component: GEContentLeftRightImageBlock,
    template: GEContentLeftRightImage_template,
  },
  ge_titled_paragraph: {
    Component: GETitledParagraphBlock,
    template: getitledparagraph_template,
  },
  ge_Hero_Primary: {
    Component: GEHeroPrimaryBlock,
    template: geheroprimary_template,
  },
  // testimonial: {
  //   Component: TestimonialBlock,
  //   template: testimonial_template,
  // },
  ge_grid: {
    Component: GEGridBlock,
    template: gegrid_template,
  },

  ge_spacer: {
    Component: GESpacerBlock,
    template: gespacer_template,
  },
};
