import { Section } from "../../utilities/section";
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
    <Section variant={data.theme.color} data-section-id="data-section-id" >
      <div className={`${styles.geContentLeftRightImage} container-fluid-custom`}>       
        <section className={data.mediaPlacement.align}>
            <div className="col-lg-6 col-md-6 col-sm-12 text-wrapper">
                <main>
                    <h3><InlineTextarea name="title" /></h3>
                    <p><InlineTextarea name="content" />​</p>                  
                   
                    { data.theme.color === "dark" && <div  className="link-secondary">
                     <InlineGroup name="button_text"  
                     focusRing={{ offset:10, borderRadius: 0 }}
                      insetControls={true}
                      fields={ACTION_FIELDS}
                     >      
                     <h6>
                  <a href={data.button_text.href} target={data.button_text.target}>{data.button_text.link} </a>
                  </h6> </InlineGroup>
                     
                 </div> 
                   
                  }

                    { data.theme.color === "light" && <div  className="link-secondary-light">
                     <InlineGroup name="button_text"  
                     focusRing={{ offset:10, borderRadius: 0 }}
                      insetControls={true}
                      fields={ACTION_FIELDS}
                     >      
                     <h6>
                  <a href={data.button_text.href} target={data.button_text.target}>{data.button_text.link} </a>
                  </h6> </InlineGroup>                     
                 </div>                    
                  }
               

                     
                </main>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 image-wrapper">
                <div className={styles.imagefeature}>
                   <InlineGroup
                    name="image"
                    focusRing={{ offset: -10, borderRadius: 0 }}
                    insetControls={true}
                    fields={IMAGE_FIELDS}
                  >
                  <img className={styles.image} 
                  src={data.image.src}
                  alt={data.image.alt}
                  />
                  </InlineGroup>
                </div>
            </div>
        </section>    
      </div>
    </Section>
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

export const ACTION_FIELDS = [
  {
    name: "href",
    label: "Hyperlink URL",
    component: "text",
  },
  {
    name: "link",
    label: "Hyperlink Text",
    component: "text",
  },
  {
    name: "target",
    label: "Target",
    component: "text",
  },
  ];

export const GEContentLeftRightImage_template = {
  label: "GE Content Left Right Image",
  defaultItem: {
    title: "GE's leadership",
    content:
    "GE’s test people are diverse and dedicated, operating with the highest level of integrity and focus to fulfill GE’s mission and deliver for its customers. Our leadership team and the Board are committed to this mission.",
    button_text:{
      link: "Learn More..",
      href: "https://www.google.com",
      target:"_blank"
    },
    image: {
      src: "../static/ge-left-right.jpg",
      alt: "General Electric",
    },
    theme: {
      color: "light",
    },    
    mediaPlacement:{
      align:"image-right",
    }
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
    {
      name:"mediaPlacement",
      label:"Image Placement",
      component: "group",
      fields: [
        {
          name: "align",
          label: "Align",
          component: "select",
          options: [
             {
              label: "image-left",
              value: "image-left",
            },
            {
              label: "image-right",
              value: "image-right",
            },
          ],
        },
      ],
    },
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
  ],
};


