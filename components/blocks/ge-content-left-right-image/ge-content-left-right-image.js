import {
  BlocksControls,
  InlineText,
  InlineTextarea,
  InlineImage,
  InlineGroup,
} from "react-tinacms-inline";
import { useCMS } from 'tinacms';

import styles from "./ge-content-left-right-image.module.scss";
import { features } from "process";


export const GEContentLeftRightImage = ({ data, index }) => {
  const cms = useCMS();

  return (
    <section className={styles.geContentLeftRightImage}>
      <div className="container-fluid-custom">
       
        <section className={"image-left"}>
            <div className="col-lg-6 col-md-6 col-sm-12 text-wrapper">
                <main>
                    <h3 className="has-text-color Large-Title-ESG"><InlineTextarea name="title" /></h3>
                    <p className="has-text-color"><InlineTextarea name="content" />​</p>
                    <div className="wp-block-button">
                     <button><InlineTextarea name="button_text"  
                      focusRing={{ offset: { x: 16, y: 8 } }}
                      insetControls={true}
                      fields={ACTION_FIELDS}
                     >      
                     </InlineTextarea>
                     
                     </button>

                      </div>
                </main>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 image-wrapper">
                <div className={styles.imagefeature}>
                   <InlineGroup
                    name="image"
                    focusRing={{ offset: 0, borderRadius: 0 }}
                    insetControls={true}
                    fields={IMAGE_FIELDS}
                  >
                  <img className={styles.image} 
                  src={data.image.src}
                  alt={data.image.alt}
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


export const ACTION_FIELDS = [
  {
    label: "Actions",
    name: "actions",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Action Label",
      type: "button",
    }),
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",
      },
      {
        label: "Type",
        name: "type",
        component: "radio-group",
        variant: "button",
        options: [
          { label: "Button", value: "button" },
          { label: "Link", value: "link" },
        ],
      },
      {
        label: "Icon",
        name: "icon",
        component: "toggle",
      },
    ],
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
      type:"button",
      label: "Button",
      component: "group",
      fields: ACTION_FIELDS,
    },
    {
      name: "image",
      label: "Image",
      component: "group",
      fields: IMAGE_FIELDS,
    },
  ],
};


