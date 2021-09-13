import { GESmallArticle, gesmallarticle_template } from "./ge-small-article/ge-small-article";
import { GEFactCardVariant2, gefactcardvariant2_template } from "./ge-fact-card-variant-2/ge-fact-card-variant-2";
import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";


export const GEGrid = ({ data }) => {
  return (
    <section id="ge-all-businesses" className="wp-block-custom-ge-grid undefined alignfull" style={{ backgroundColor: "transparent" }}>
      <div className="grid-stack light-container container-fluid-custom">
        <div className="grid-title row"><h2 className="title col-12" style={{ color: "var(--ge-dark-blue-grey)" }}><InlineTextarea name="title" /></h2></div>
        <div className="grid-items row">
          <InlineBlocks
            direction="horizontal"
            className="flex flex-wrap text-left"
            name="items"
            blocks={GEGRIDITEM_BLOCKS}
          />
        </div>
        <div className="grid-footer row">
          <h6 className="title col-12" style={{ color: "var(--ge-dark-blue-grey)" }}>
            <a href="https://www.google.com" target="_blank"><InlineTextarea name="calltoaction" /></a>
          </h6>
        </div>
      </div>
    </section>
  );
};

export function GEGridBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <GEGrid data={data} />
    </BlocksControls>
  );
}

export const gegrid_template = {
  label: "GE Grid",
  defaultItem: {
    title: "More on Investor Relations",
    items: [
      {
        _template: "ge_small_article",
        title: "Longer Information 1",
        description:
          "By eleven o'clock the next day we were well upon our way to the old English capital.",
      },
      {
        _template: "ge_fact_card_variant_2",
        title: "Longer Information 2",
        description:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
      },
    ],
    calltoaction: "CALL TO ACTION",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "items",
      label: "GE Grid Items",
      component: "blocks",
      itemProps: (item) => ({
        label: item.title, 
        //description: item.description,
        //component: item.component,
      }),
      templates: {
        ge_small_article: gesmallarticle_template,
        ge_fact_card_variant_2: gefactcardvariant2_template,
      },
    },
    {
      name: "calltoaction",
      label: "Call to action",
      component: "text",
    },
  ],
};

const GEGRIDITEM_BLOCKS = {
  ge_small_article: {
    Component: GESmallArticle,
    template: gesmallarticle_template,
  },
  ge_fact_card_variant_2: {
    Component: GEFactCardVariant2,
    template: gefactcardvariant2_template,
  },
};
