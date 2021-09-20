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
                    focusRing={{ offset: 0, borderRadius: 0 }}
                    insetControls={true}
                    fields={IMAGE_FIELDS}
                  >
                  <img className={styles.articleMedia} 
                  src={data.image.src}
                  alt={data.image.alt}
                  />
                    </InlineGroup>
       </div>
        <a href="" target="_self" className="">
          <div className="card-stack article-content" >
            <div className="card-title">
              <h4><InlineTextarea name="title" /></h4></div>
            <div className="card-description">
              <p className="ge-small-article-para description body-2" style={{ color: "var(--ge-dark-blue-grey)", textAlign: "left" }}><InlineTextarea name="description" /></p></div>
            <div className="cta-container" style={{ color: "var(--ge-dark-blue-grey)", textAlign: "left" }}>
              <div className="call-to-action arrow-right ficon-lg-arrow-right"></div>
            </div>
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
      focusRing={{ offset: -12 }}
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
    component: "text",
  },
  {
    name: "alt",
    label: "Alt Text",
    component: "text",
  },
];

export const gesmallarticle_template = {
  label: "GE Small Article",
  defaultItem: {
    title: "GE Small Article Title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: {
      src: "../static/ge-small-article.jpg",
      alt: "General Electric",
    },
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
  ],
};


