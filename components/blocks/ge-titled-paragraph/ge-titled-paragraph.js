
import * as React from "react";
import { Section } from "../../utilities/section";
import styles from './ge-titled-paragraph.module.scss';
import {
  BlocksControls,
  InlineTextarea,
} from "react-tinacms-inline";


export const GETitledParagraph = ({ data }) => {
  return (
    <Section variant={data.theme.color} data-section-id="data-section-id" >    
      <div className={ `${styles.geTitledParagraph} container-fluid-custom`}>
        <div className="row">      
          <div className="col-12 col-lg-9">
            <h5><InlineTextarea name="title"/></h5>
            <h2><InlineTextarea name="content"/></h2>
          </div>
        </div>
      </div>      
    </Section>       
  );
};

export function GETitledParagraphBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset:-10 }}
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
    theme: {
      color: "light",
    },
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
