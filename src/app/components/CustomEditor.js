// CustomEditor.js
import { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Include Quill's default styles

const CustomEditor = ({ onSave, onVariables }) => {
  useEffect(() => {
    const quill = new Quill('#editor-container', {
      theme: 'snow',
      modules: {
        toolbar: {
          container: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['save', 'variables']
          ],
          handlers: {
            'save': () => onSave(),
            'variables': () => onVariables()
          }
        }
      }
    });
  }, [onSave, onVariables]);

  return (
    <div id="editor-container" style={{ height: '400px',color:"black" }}></div>
  );
};

export default CustomEditor;
