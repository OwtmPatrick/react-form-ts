import React, { useState } from 'react';
import { TextField } from '@mui/material';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

const SchemaInput: React.FC<{
  setSchema: (val: any) => void;
  defaultValue: any;
}> = ({ setSchema, defaultValue }) => {
  console.log(defaultValue);
  const [value, setValue] = useState<string>(JSON.stringify(defaultValue, null, 2));
  const [error, setError] = useState<boolean>(false);

  const onChange = (newValue: string) => {
    setValue(newValue);

    try {
      const parsed = JSON.parse(newValue);

      setError(false);
      setSchema(parsed);

      console.log('parsed:', parsed);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <AceEditor
      value={value}
      mode="json"
      theme="github"
      onChange={onChange}
      name="editor_id"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default SchemaInput;
