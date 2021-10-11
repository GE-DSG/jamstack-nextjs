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
        'fontFamily',
        'fontSize',
        '|',
        'horizontalLine',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        'alignment',
        '|',
        'link',
        'blockQuote',
        'insertTable',
        'htmlEmbed',
        //'image',
        //'imageInsert',
        //'imageUpload',
        'uploadImage',
        'mediaEmbed',
        '|',
        'undo',
        'redo'
        //'sourceEditing'
      ]
    },
    table: {
      contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
    },
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl: 'http://localhost:3000/static/'
      //uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
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
          const data = editor.getData();
          //console.log({ event, editor, data });
          //onChange(data);
          props.onChange(data)
        }}
        onFocus={(event, editor) => {
          //console.log("Focus.", editor);
        }}
      />
    );
  } else {
    return <h6> Editor is loading </h6>;
  }
}



export default Editor;
