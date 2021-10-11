import React, { useEffect, useState, useRef } from "react";
//import Editor from 'ckeditor5-custom-build/build/ckeditor';
//import CKEditor5 from 'ckeditor5-custom-build/build/ckeditor';

//import ImageUpload from '@ckeditor/ckeditor5-image';

// Solution-1 start
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// --- end

const Editor = (props) => {
  // Solution-2 start
  let editorRef = useRef();
  const { CKEditor, CustomEditor } = editorRef.current || {};
  // --- end
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Solution-2 start
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      //ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),      
      CustomEditor: require("ckeditor5-custom-build"),
      //CKEditor5: require("ckeditor5-custom-build/build/ckeditor").CKEditor5,
    };
    // --- end

    setLoaded(true);
  }, []); // run on mounting

  const editorConfiguration = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'bulletedList',
        'numberedList',        
        'indent',        
        'alignment',
        '|',
        'link',        
        'horizontalLine',
        'blockQuote',
        'insertTable',
        '|',
        'image',
        'imageInsert',
        'imageUpload',
        'mediaEmbed',
        'undo',
        'redo'
        //'sourceEditing'
      ]
    },
    table: {
      contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
    },
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: 'http://localhost:3000/static'
/*
      // Enable the XMLHttpRequest.withCredentials property.
      withCredentials: true,

      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        'X-CSRF-TOKEN': 'CSRF-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }
*/      
    }
  };

  if (loaded) {
    return (
      <CKEditor
        //editor={ClassicEditor}
        editor={CustomEditor}
               
        data={props.data}
        config={editorConfiguration}
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
