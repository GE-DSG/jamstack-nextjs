import styles from './ge-small-article.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";


export const GESmallArticle = ({ data, index }) => {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 10 }}
      insetControls={true}
    >

    <section className={ styles.geSmallArticle }>
      <div className={styles.cardContainer} >
        <div className="article-media">
          <div className="media-bg" style={{ backgroundColor: "#f0f3f7" }}></div>
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
      </div>
    </section>

    </BlocksControls>

  );
};


export const gesmallarticle_template = {
  label: "GE Small Article",
  defaultItem: {
    title: "GE Small Article Title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.",
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
  ],
};


