import {
  BlocksControls,
  InlineText,
  InlineTextarea,
  InlineImage,
  InlineGroup,
} from "react-tinacms-inline";
import { useCMS } from 'tinacms';

import styles from "./ge-content-left-right-image.module.scss";


export const GEContentLeftRightImage = ({ data, index }) => {
  const cms = useCMS();

  return (
    <section className={styles.geContentLeftRightImage}>
      <div className="container-fluid-custom">
        <div>
        <section className={"image-left"}>
            <div className="col-lg-6 col-md-6 col-sm-12 text-wrapper">
                <main>
                    <h3 className="has-text-color Large-Title-ESG"><InlineTextarea name="title" /></h3>
                    <p className="has-text-color"><InlineTextarea name="content" />​</p>
                    <div className="wp-block-button">
                     <button><InlineTextarea name="button_text"  /></button>

                      </div>
                </main>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 image-wrapper">
                <div className="image-feature">
                   <InlineGroup
                    name="image"
                    focusRing={{ offset: 0, borderRadius: 0 }}
                    insetControls={true}
                    fields={IMAGE_FIELDS}
                  >
                  <img
                    className="lg:absolute lg:inset-0 w-full h-auto max-h-96 md:max-h-128 lg:max-h-full lg:h-full object-cover"
                    /*src={data.image.src}
                    alt={data.image.alt}*/
                  />
                    </InlineGroup>


                    {/* <InlineImage
                    name="src"
                    previewSrc={fieldValue => cms.media.previewSrc(`public${fieldValue}`)}
                    parse={media => `/img/${media.filename}`}
                    uploadDir={() => '/public/img/'}
                    className="img--wrap"
                    alt={data.alt}
                    focusRing={false}
                  /> */}
                  {/* {props => <img src={props.src} alt={data.alt} />} */}

                </div>
            </div>
        </section>
    </div>
      </div>
    </section>
  );
};

export function GEContentLeftRightImageBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <GEContentLeftRightImage data={data} />
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


export const GEContentLeftRightImage_template = {
  label: "GE Content Left Right Image 1",
  defaultItem: {
    title: "GE's leadership",
    content:
    "GE’s test people are diverse and dedicated, operating with the highest level of integrity and focus to fulfill GE’s mission and deliver for its customers. Our leadership team and the Board are committed to this mission.",
    button_text: "Learn more",
    image: {
      src: "../static/ge-left-right.jpg",
      alt: "Photo from Unsplash",
    },
    // actions: [
    //   {
    //     label: "Primary Action",
    //     type: "button",
    //     icon: "true",
    //   },
    //   {
    //     label: "Learn More",
    //     type: "link",
    //   },
    // ],
  },

  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "content",
      label: "Content",
      component: "textarea",
    },
    {
      name: "button_text",
      label: "Button text",
      component: "text",
    },
    {
      name: "image",
      label: "Image",
      component: "group",
      fields: IMAGE_FIELDS,
    },
  ],
};


