
import * as React from "react";
import { Section } from "../../utilities/section";
import styles from './ge-spacer.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineGroup,
} from "react-tinacms-inline";


export const GESpacer = ({data}) =>{
return (
  <Section variant={data.style.color}> 
   <div className={styles.GESpacer } style={{ height:`${data.height}px` }} data-section-id="data-section-id">          
     <InlineTextarea
     focusRing={{ offset:0, borderRadius:10}}
      insetControls={true}
      fields={HEIGHT_FIELDS}
    >       
     </InlineTextarea>
    </div>
    </Section>
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
    style: {
      color: "light",
    },
    },   
    
    fields: [
       ...HEIGHT_FIELDS,
       {
        name: "style",
        label: "Style",
        component: "group",
        fields: [
          {
            name: "color",
            label: "color",
            component: "select",
            options: [
              {
                label: "Default",
                value: "default",
              },
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
}



