import {
  BlocksControls,
  InlineText,
  InlineTextarea,
} from "react-tinacms-inline";

// import styles from "../styles/css/ge_unified.style.css";
// import '../styles/css/ge_unified.style.css';


export const GEContentLeftRightImage = ({ data }) => {

  return (
    <section variant={data.style.color}>
      <div className="container-fluid-custom">
        <div className="row">      
          <div className="content-row col-12 col-lg-9">
            <h5><InlineTextarea name="title" /></h5>
            <h5><InlineTextarea name="content" /></h5>            
          </div>
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

export const GEContentLeftRightImage_template = {
  label: "GE Content Left Right  Image",
  defaultItem: {
    title: "GE's leadership",
    content: "GE’s people are diverse and dedicated, operating with the highest level of integrity and focus to fulfill GE’s mission and deliver for its customers. Our leadership team and the Board are committed to this mission.",    
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
