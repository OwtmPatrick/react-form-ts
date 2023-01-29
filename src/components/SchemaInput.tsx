import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';

const SchemaInput: React.FC<{
  setSchema: (val: any) => void;
  defaultValue: any;
}> = ({ setSchema, defaultValue }) => {
  const [value, setValue] = useState<string>(JSON.stringify(defaultValue, null, 2));
  const [error, setError] = useState<boolean>(false);

  const onChange = (newValue: string) => {
    setValue(newValue);

    try {
      const parsed = JSON.parse(newValue);

      setError(false);
      setSchema(parsed);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <Stack
      spacing={1}
      border={`1px solid ${error ? red[500] : 'transparent'}`}
      sx={(theme) => ({
        [theme.breakpoints.up('lg')]: {
          width: '50%',
        },
      })}
    >
      <Typography variant="h6">JSON Schema</Typography>

      <AceEditor
        value={value}
        mode="json"
        theme="github"
        onChange={onChange}
        name="editor_id"
        editorProps={{ $blockScrolling: true }}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '500px',
        }}
      />
    </Stack>
  );
};

export default SchemaInput;
