import styles from './ge-fact-card-variant-2.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineGroup,
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
        <h4 className={styles.title}><InlineTextarea name="title" /></h4>
        <p className="description body-2" style={{ color: "var(--ge-dark-blue-grey)", textAlign: "left" }}><InlineTextarea name="description" /></p>
        <span className="call-to-action" style={{ color: "var(--ge-dark-blue-grey)" }}>

            
                   <div  className="link-secondary-light">
                     <InlineGroup name="link"  
                     focusRing={{ offset:10, borderRadius: 0 }}
                      insetControls={true}
                      fields={ACTION_FIELDS}
                     >      
                     <h6>
                  <a href={data.link.href} target={data.link.target}>{data.link.link} </a>
                  </h6> </InlineGroup>
                     
                     </div>
           
           </span>
      </div>

    </div>

    </BlocksControls>

  );
};

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


export const gefactcardvariant2_template = {
  label: "GE Fact Card Variant 2",
  defaultItem: {
    title: "GE Fact Card Title",
    description: "An porro adolescens ius. Affert ridens nam eu. Regione legimus liberavisse no mea, sensibus delicata nec ne. Animal integre ei cum, vel no epicurei phaedrum referrentur. Ut quas inani eos.",
  
    link:{
      link: "Learn More..",
      href:"https://www.ge.com/",
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
      name: "link",
      label: "Hyperlink",
      component: "group",
      fields: ACTION_FIELDS,
    },


  ],
};