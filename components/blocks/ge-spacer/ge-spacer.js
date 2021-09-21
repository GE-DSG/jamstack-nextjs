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

   <section >
          
    {/* <h1>Hi I am spacer</h1> */}

    <InlineGroup name="height"  
     focusRing={{ offset:10, borderRadius: 0}}
      insetControls={true}
      fields={HEIGHT_FIELDS}
    >    
    <div className={ styles.GESpacer } style={{height:`${data.height}px`, textAlign: "left" }} ></div>
     </InlineGroup>


    </section>
  

)

}


export function GESpacerBlock({ data, index }) {
    return (
      <BlocksControls name="height" 
        index={index}
        focusRing={{ offset: -12 }}
        insetControls={true}
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
    //  {
    //   title: "GE Small Article Title",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    //     image: {
    //     src: "../static/ge-small-article.jpg",
    //     alt: "General Electric",
    //   },       

    // fields: [
    //     {
    //       name: "height",
    //       label: "Height",
    //     //   component: "text",
    //     component: "group",
    //       fields: HEIGHT_FIELDS,
    //     },
        
    //   ],
}



