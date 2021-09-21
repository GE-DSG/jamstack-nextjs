import styles from './ge-spacer.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineGroup,
} from "react-tinacms-inline";


export const GESpacer = ({data, index}) =>{
return (
   <section className={ styles.GESpacer } style={{ height:`${data.height}px` }} >          
     <InlineTextarea
     focusRing={{ offset:0, borderRadius:10}}
      insetControls={true}
      fields={HEIGHT_FIELDS}
    >       
     </InlineTextarea>
    </section>
    )
}


export function GESpacerBlock({ data, index }) {
    return (
      <BlocksControls 
        index={index}
        focusRing={{ offset: 0 , borderRadius:10}}
        insetControls={false}
        
      > <GESpacer data={data} />
      </BlocksControls>
        
    );
  }


  export const HEIGHT_FIELDS = [
    {
      name: "height",
      label: "Spacer Height",
      component: "text",
    },
    ];
  


export const gespacer_template = { 
    label: "GE Spacer", 
    defaultItem: {
    height: "100",
    },    
    fields: HEIGHT_FIELDS,
}



