import styles from './ge-spacer.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineGroup,
} from "react-tinacms-inline";


export const GESpacer = ({data, index}) =>{
return (
//     <BlocksControls
//     index={index}
//     focusRing={{ offset: 10 }}
//     insetControls={true}
//   >
//   </BlocksControls>

   <section className={ styles.GESpacer } style={{ height:`${data.height}px` }} >
          
    {/* <h1>Hi I am spacer</h1> */}

    <InlineGroup
     focusRing={{ offset:10, borderRadius:10}}
      insetControls={true}
      fields={HEIGHT_FIELDS}
    >    
    {/* <div className={ styles.GESpacer } style={{ height:`${data.height}px`, textAlign: "left" }} ></div> */}
     </InlineGroup>


    </section>
  

)

}


export function GESpacerBlock({ data, index }) {
    return (
      <BlocksControls 
        index={index}
        focusRing={{ offset: -12 }}
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



