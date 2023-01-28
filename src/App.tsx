import React, { useState } from 'react';
import { Stack } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import SchemaInput from './components/SchemaInput';
import Form from './components/Form';

import { Field } from './types';

const defaultValue = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    gender: {
      enum: ['male', 'female'],
    },
    boolean: {
      type: 'boolean',
    },
    parents: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          age: {
            type: 'integer',
          },
          grandparents: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                retired: {
                  type: 'boolean',
                },
              },
            },
          },
        },
      },
      minItems: 0,
      maxItems: 2,
    },
  },
};

// const defaultValue = {
//   type: 'object',
//   properties: {
//     streetAddress: {
//       type: 'string',
//     },
//     city: {
//       type: 'string',
//     },
//     state: {
//       type: 'string',
//     },
//     gender: {
//       enum: ['male', 'female', 'else'],
//     },
//     phones: {
//       type: 'array',
//       maxItems: 3,
//       minItems: 1,
//       items: {
//         type: 'string',
//         minLength: 1,
//         maxLength: 255,
//       },
//     },
//     parents: {
//       type: 'array',
//       minItems: 0,
//       maxItems: 2,
//       items: {
//         type: 'object',
//         properties: {
//           relation: {
//             enum: ['mother', 'father'],
//           },
//           age: {
//             type: 'integer',
//           },
//           name: {
//             type: 'string',
//           },
//           secondName: {
//             type: 'string',
//           },
//           grandFather: {
//             type: 'object',
//             name: {
//               type: 'string',
//             },
//             age: {
//               type: 'integer',
//             },
//             secondName: {
//               type: 'string',
//             },
//             retired: {
//               type: 'boolean',
//             },
//           },
//           //   grandMother: {
//           //     type: 'object',
//           //     name: {
//           //       type: 'string',
//           //     },
//           //     age: {
//           //       type: 'integer',
//           //     },
//           //     secondName: {
//           //       type: 'string',
//           //     },
//           //     retired: {
//           //       type: 'boolean',
//           //     },
//           //   },
//         },
//       },
//     },
//   },
//   required: ['streetAddress', 'city', 'state'],
// };

const App = () => {
  const [schema, setSchema] = useState(defaultValue as Field);
  const largeScreen = useMediaQuery('(min-width: 1200px)');

  return (
    <>
      <Stack p={largeScreen ? 2 : 1} spacing={5} direction={largeScreen ? 'row' : 'column'}>
        <SchemaInput setSchema={setSchema} defaultValue={defaultValue} />

        <Form schema={schema} />
      </Stack>

      <CssBaseline />
    </>
  );
};

export default App;
