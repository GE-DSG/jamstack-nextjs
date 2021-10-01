import styles from './ge-small-article.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineGroup,
} from "react-tinacms-inline";


export const GESmallArticle = ({ data, index }) => {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 10 }}
      insetControls={true}
    >

    <section className={ styles.geSmallArticle }>
      <div className={styles.imageContainer} >       
        <InlineGroup
                    name="image"
                    focusRing={{ offset:-10, borderRadius: 0 }}
                    insetControls={true}
                    fields={IMAGE_FIELDS}
                  >
                  <img className={styles.articleMedia} 
                  src={data.image.src}
                  alt={data.image.alt}
                  />
                    </InlineGroup>
       </div>
        <a 
        href={data.link.herf} 
        target={data.link.target} 
        className={styles.ctaContainer}>
          <div className={`${styles.cardContent} card-content`}>
            <div className="card-title">
            <h6><InlineTextarea name="title" 
            
            /></h6>
            </div>
            <div className="cardDescription">
              <p className={`${styles.description} body-2`} >
                <InlineTextarea name="description" /></p></div>
           
              <div className={`${styles.callToAction} arrow-right ficon-lg-arrow-right`}></div>
            
          </div>
        </a>
      
    </section>

    </BlocksControls>

  );
};

export function GESmallArticleBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -10 }}
      insetControls={true}
    >
      <GESmallArticle data={data} />
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
    name: "herf",
    label: "Hyperlink",
    component: "text",
  },
  {
    name: "target",
    label: "Target",
    component: "text",
  },
]

export const gesmallarticle_template = {
  label: "GE Small Article",
  defaultItem: {
    title: "GE Small Article Title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: {
      src: "../static/ge-small-article.jpg",
      alt: "General Electric",
    },
    link:{
      herf:"https://www.ge.com/",
      target:"_blank",
    }
  },
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "description",
      label: "Description",
      component: "textarea",
    },
    {
      name: "image",
      label: "Image",
      component: "group",
      fields: IMAGE_FIELDS,
    },

    {
      name: "link",
      label: "Hyperlink",
      component: "group",
      fields: ACTION_FIELDS,
    },
  ],
};


