import styles from './ge-titled-paragraph.module.scss';
import {
  BlocksControls,
  InlineText,
  InlineTextarea,
} from "react-tinacms-inline";


export const GETitledParagraph = ({ data }) => {

  return (
    <section data-section-id="data-section-id" className={ styles.geTitledParagraph } style={{ backgroundColor: "transparent" }}>
      <div className="container-fluid-custom">
        <div className="row">      
          <div className="content-row col-12 col-lg-9">
            <h5 style={{ color: "var(--ge-primary-blue)", backgroundColor: "transparent", textAlign: "left", fontSize: "20px" }}><InlineTextarea name="title" /></h5>
            <h2 style={{ color: "var(--ge-dark-blue-grey)", backgroundColor: "transparent", textAlign: "left", fontSize: "42px" }}><InlineTextarea name="content" /></h2>
          </div>
        </div>
      </div>
    </section>         
  );
};

export function GETitledParagraphBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <GETitledParagraph data={data} />
    </BlocksControls>
  );
}

export const getitledparagraph_template = {
  label: "GE Titled Paragraph",
  defaultItem: {
    title: "OUR MISSION",
    content: "GE drives the world forward by tackling its biggest challenges, bringing real progress and possibility to every corner of the planet.",    
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
  ],
};
