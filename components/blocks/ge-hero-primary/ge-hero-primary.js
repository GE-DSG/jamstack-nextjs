import * as React from "react";
import { ThemeContext } from "../../utilities/theme";
import {
  InlineGroup,
  BlocksControls,
  InlineTextarea,
  InlineImage,
} from "react-tinacms-inline";
import { ACTION_FIELDS, Actions } from "../../utilities/actions";
import { Section, SectionFields } from "../../utilities/section";

import styles from "./ge-hero-primary.module.scss"

export const GEHeroPrimary = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <section  className={styles.geHeroPrimary}>

<div className={styles.mainBackground}>
    <img
    className={styles.mainBg}
    alt={data.image.alt}
    src={data.image.src}
  />
</div>


      <div className="container-fluid-custom no-gutters p-0">
      {/* <div className="bg-overlay" ></div> */}
        <div className="row pr-0 pl-0 no-gutters post-entry">
          <div className="col-lg-6 col-md-12 col-sm-12 pr-0 pl-0 no-gutters text-wrapper">
            <div className="intro-text">
            <main>
            <h5 >
              <InlineTextarea name="tagline"   focusRing={{ offset: 10, borderRadius: 0 }}/>
            </h5>
            <h1>
              <InlineTextarea name="headline"  focusRing={{ offset: 20, borderRadius: 0 }} />                    
            </h1>
            <p className="para">
              <InlineTextarea name="text" />
            </p>

            <Actions actions={data.actions} />
            </main>
            </div>          
          </div>

    {/*  */}
        <div className="col-lg-7 col-md-12 col-sm-12 bleed-end-col-lg-7 bleed-full-md bleed-col-12 image-wrapper">


        <div className="header-image">
        <div className="image-gradient"></div>
      <div className="image-feature post-image">
          <picture>
              <InlineGroup
              name="image"
              focusRing={{ offset: 0, borderRadius: 0 }}
              insetControls={true}
              fields={IMAGE_FIELDS}
            >
        <img
          className="lg:absolute lg:inset-0 w-full h-auto max-h-96 md:max-h-128 lg:max-h-full lg:h-full object-cover"
          alt={data.image.alt}
          src={data.image.src}
        />
      </InlineGroup>
        </picture>
    </div>

</div>

        </div>
        
        
        </div>
      </div>
    </section>
  );
};

export function GEHeroPrimaryBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 20 }}
      insetControls={true}
    >
      <GEHeroPrimary data={data} />
    </BlocksControls>
  );
}

export const IMAGE_FIELDS = [
  {
    name: "src",
    label: "Image Source",
    component: "text",
  },
  {
    name: "alt",
    label: "Alt Text",
    component: "text",
  },
];

export const geheroprimary_template = {
  label: "GE Hero Primary",
  defaultItem: {
    tagline: "About us ",
    headline: "GE Mission Statement & Values",
    text:
      "Give your team a contextual, intuitive editing experience without sacrificing code quality.",
      image: {
        src: "../static/about_ge.jpg",
        alt: "General Electric",
      },
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
    style: {
      color: "tint",
    },
  },
  fields: [
    {
      name: "",
      label: "Text",
      component: "group",
      fields: [...SectionFields],
    },
    {
      name: "image",
      label: "Image",
      component: "group",
      fields: IMAGE_FIELDS,
    },
    ...ACTION_FIELDS,
    {
      name: "style",
      label: "Style",
      component: "group",
      fields: [
        {
          name: "color",
          label: "Color",
          component: "select",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Tint",
              value: "tint",
            },
            {
              label: "Primary",
              value: "primary",
            },
          ],
        },
      ],
    },
  ],
};
