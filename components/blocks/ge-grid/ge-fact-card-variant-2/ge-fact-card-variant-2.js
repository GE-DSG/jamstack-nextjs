import styles from './ge-fact-card-variant-2.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";


export const GEFactCardVariant2 = ({ data, index }) => {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 10 }}
      insetControls={true}
    >

    <div className={ styles.geFactCardVariant2 } style={{ backgroundColor: "#f0f3f7" }}>

      <div className="theme-light">
        <h4 className="title" style={{ color: "var(--ge-dark-blue-grey)", textAlign: "left" }}><InlineTextarea name="title" /></h4>
        <p className="description body-2" style={{ color: "var(--ge-dark-blue-grey)", textAlign: "left" }}><InlineTextarea name="description" /></p>
        <span className="call-to-action" style={{ color: "var(--ge-dark-blue-grey)" }}>Read more</span>
      </div>

    </div>

    </BlocksControls>

  );
};


export const gefactcardvariant2_template = {
  label: "'GE Fact Card Variant 2",
  defaultItem: {
    title: "GE Fact Card Title",
    description: "An porro adolescens ius. Affert ridens nam eu. Regione legimus liberavisse no mea, sensibus delicata nec ne. Animal integre ei cum, vel no epicurei phaedrum referrentur. Ut quas inani eos.",
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