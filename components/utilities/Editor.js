import React, { useEffect, useState, useRef } from "react";

//import ImageUpload from '@ckeditor/ckeditor5-image';

// Solution-1 start
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// --- end

const Editor = (props) => {
  // Solution-2 start
  let editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  // --- end
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Solution-2 start
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),      
    };
    // --- end

    setLoaded(true);
  }, []); // run on mounting

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
               
        data={props.data}
/*        
        config={{
          plugins: [ ImageUpload ],
        }}         
*/        
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          //console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          // do something when editor's content changed
          const data = editor.getData();
          //console.log({ event, editor, data });
          //onChange(data);
          props.onChange(data)
        }}
        onBlur={(event, editor) => {
          //console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          //console.log("Focus.", editor);
        }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default Editor;
