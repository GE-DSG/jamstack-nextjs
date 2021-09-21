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
    <Section variant={data.style.color}>
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
        <div className={`row pr-0 pl-0 no-gutters ${styles.postEntry}`}>
          <div className={`col-lg-6 col-md-12 col-sm-12 pr-0 pl-0 no-gutters ${styles.textWrapper}`}>
            <div className={styles.introText}>
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


        <div className={`col-lg-7 col-md-12 col-sm-12 bleed-end-col-lg-7 bleed-full-md bleed-col-12 ${styles.imageWrapper}`}>


        <div className={styles.headerImage}>
        <div className={styles.imageGradient}></div>
        <div className={styles.imageFeature, styles.postImage}>
        <picture>
            <InlineGroup
            name="image"
            focusRing={{ offset: 0, borderRadius: 0 }}
            insetControls={true}
            fields={IMAGE_FIELDS}
          >
        <img        
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
    </Section>
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
    component: "image",
    parse: media => `/static/${media.filename}`,
    uploadDir: () => '/public/static/',
    previewSrc: fullSrc => fullSrc.replace('/public', '')
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
