import * as React from "react";
import { GESmallArticle, gesmallarticle_template } from "./ge-small-article/ge-small-article";
import { GEFactCardVariant2, gefactcardvariant2_template } from "./ge-fact-card-variant-2/ge-fact-card-variant-2";
import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";
import { ThemeContext } from "../../utilities/theme";
import { ACTION_FIELDS, Actions } from "../../utilities/actions";
import { Section, SectionFields } from "../../utilities/section";
import styles from './ge-grid.module.scss';


export const GEGrid = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Section variant={data.theme.color}>
    <section id="ge-all-businesses" className={ styles.geGrid }>
      <div className="container-fluid-custom no-gutters pt-5 pb-5 ">
       
          <h2 className={styles.gridTitle}><InlineTextarea name="title" /> </h2>            
            
      
          <InlineBlocks
           focusRing={{ offset:-10 }}
            direction="horizontal"
            className={styles.gridItems}
            name="items"
            blocks={GEGRIDITEM_BLOCKS}
          />
        
     
        <div className="grid-footer">
        <Actions actions={data.actions} />
        </div>
      </div>
    </section>
    </Section>
  );
};

export function GEGridBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -10 }}
      insetControls={true}
    >
      <GEGrid data={data} />
    </BlocksControls>
  );
}

export const gegrid_template = {
  label: "GE Grid",
  defaultItem: {
    title: "GE Grid Title Text",
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
    actions: [
      {
        label: "Primary Action",
        type: "button",
        icon: "true",
      },
      {
        label: "Learn More",
        type: "link",
      },
    ],

    theme: {
      color: "light",
    },
  },
  
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    ...ACTION_FIELDS,
    {
      name: "theme",
      label: "Theme",
      component: "group",
      fields: [
        {
          name: "color",
          label: "Color",
          component: "select",
          options: [       
            {
              label: "Light",
              value: "light",
            },
            {
              label: "Dark",
              value: "dark",
            },
          ],
        },
      ],
    },
    {
      name: "items",
      label: "GE Grid Items",
      component: "blocks",
      itemProps: (item) => ({
        label: item.title,
      }),
      templates: {
        ge_small_article: gesmallarticle_template,
        ge_fact_card_variant_2: gefactcardvariant2_template,
      },
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
