import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";


export const GEGrid = ({ data }) => {
  return (
    <section id="ge-all-businesses" className="wp-block-custom-ge-grid undefined alignfull" style={{ backgroundColor: "transparent" }}>
      <div className="grid-stack light-container container-fluid-custom">
        <div className="grid-title row"><h2 className="title col-12" style={{ color: "var(--ge-dark-blue-grey)" }}><InlineTextarea name="title" /></h2></div>
        <div className="grid-items row">
          Grid Items goes here...  
          <InlineBlocks
            direction="horizontal"
            className="flex flex-wrap text-left"
            name="items"
            blocks={GEGRIDITEM_BLOCKS}
          />
        </div>
        <div className="grid-footer row">
          <h6 className="title col-12" style={{ color: "var(--ge-dark-blue-grey)" }}>            
            <a href="https://www.google.com" target="_blank"><InlineTextarea name="calltoaction" /></a>
          </h6>
        </div>
      </div>
    </section>
  );
};

export function GEGridBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <GEGrid data={data} />
    </BlocksControls>
  );
}

export const gegrid_template = {
  label: "GE Grid",
  defaultItem: {
    title: "More on Investor Relations",
    calltoaction: "CALL TO ACTION",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "calltoaction",
      label: "CALL TO ACTION",
      component: "text",
    },        
  ],
};


const GEGRIDITEM_BLOCKS = {
  //label: "GE Grid",
/*  
  gegriditem: {
    Component: GEGridItemBlock,
    template: gegriditem_template,
  },
*/
};
