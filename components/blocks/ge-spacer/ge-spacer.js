import styles from './ge-spacer.module.scss';

import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineGroup,
} from "react-tinacms-inline";


export const GESpacer = ({data, index}) =>{
return (
    <BlocksControls
    index={index}
    focusRing={{ offset: 10 }}
    insetControls={true}
  >


   <section className={ styles.GESpacer }>
      <div className={styles.imageContainer} style={{height:`${data.height}px"`, textAlign: "left" }} >    
    {/* <h1>Hi I am spacer</h1> */}

    <InlineGroup name="height"  
     focusRing={{ offset:0, borderRadius: 0, height:`${data.height}px"`}}
      insetControls={true}
      fields={HEIGHT_FIELDS}
                     >    
     </InlineGroup>

      </div>
    </section>
  
  </BlocksControls>
)

}


export function GESpacerBlock({ data, index }) {
    return (
    //   <BlocksControls
    //     index={index}
    //     focusRing={{ offset: -12 }}
    //     insetControls={true}
    //   > </BlocksControls>
        <GESpacer data={data} />
     
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
    height: "100px",
    //  {
    //   title: "GE Small Article Title",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    //     image: {
    //     src: "../static/ge-small-article.jpg",
    //     alt: "General Electric",
    //   },       

    fields: [
        {
          name: "height",
          label: "Height",
        //   component: "text",
        component: "group",
          fields: HEIGHT_FIELDS,
        },
        
      ],
}



