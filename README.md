# select-react-bootstrap

A custom Select designed to behave like regular select form control, and developed to use with **React 16+** and **Bootstrap 5**.

## Installation & Usage

`npm i select-react-bootstrap --save`

### With React Hooks

#### Example with a simple Array of String

In this type of Array, each string are both the same label and value.
No need to transform the array or data.

```js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Label from './lib/components/Label';
import Select from './lib/components/Select';

const arrayOfString = [
    'fox',
    'bird',
    'dog',
    'cat',
    'tiger',
    'bear',
    'elephant',
    'duke',
    'lion',
    'kangaroo',
    'snake',
];

export default function App() {
    const [animal, setAnimal] = useState('');

    const handleChange = e => {
        setAnimal(e.target.value);
    };

    return (
        <div className="container">
            <Label
                label="Animal"
                htmlFor="animal"
                className="text-dark mt-3"
                style={{ fontWeight: 'bold' }}
            />
            <Select
                name="animal"
                id="animal"
                selectText="Select ..."
                isDisabled={true}
                data={arrayOfString}
                value={animal}
                onChange={handleChange}
            />
        </div>
    );
}
```

#### Example with an Array of Object

In this type of Array, there is two ways :

-   If you can change or manage the data's keys names of object in the array, you must rename them : optionLabel & optionValue.
-   If you can't change or manage them, you must create a copy of array and rename the data's keys names of object with the keys: optionLabel & optionValue.

```js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Label from './lib/components/Label';
import Select from './lib/components/Select';

const arrayOfObject = [
    { colorName: 'pink', colorRef: '#E260D2' },
    { colorName: 'red', colorRef: '#FF0000' },
    { colorName: 'blue', colorRef: '#3876AC' },
    { colorName: 'yellow', colorRef: '#FBE468' },
    { colorName: 'gray', colorRef: '#C4C4C4' },
    { colorName: 'orange', colorRef: '#EC5B24' },
    { colorName: 'green', colorRef: '#279E7A' },
    { colorName: 'purple', colorRef: '#7360D2' },
];

export default function App() {
    const [color, setColor] = useState('');

    const handleChange = e => {
        setColor(e.target.value);
    };

    const newArrayOfObject = arrayOfObject.map(color => {
        return {
            optionLabel: color.colorName,
            optionValue: color.colorRef,
        };
    });

    console.log(newArrayOfObject);
    //     [{ optionLabel: 'pink', optionValue: '#E260D2' },
    //     { optionLabel: 'red', optionValue: '#FF0000' },
    //     { optionLabel: 'blue', optionValue: '#3876AC' },
    //     { optionLabel: 'yellow', optionValue: '#FBE468' },
    //     { optionLabel: 'gray', optionValue: '#C4C4C4' },
    //     { optionLabel: 'orange', optionValue: '#EC5B24' },
    //     { optionLabel: 'green', optionValue: '#279E7A' },
    //     { optionLabel: 'purple', optionValue: '#7360D2' }];

    return (
        <div className="container">
            <Label
                label="Color"
                htmlFor="color"
                className="text-dark mt-3"
                style={{ fontWeight: 'bold' }}
            />
            <Select
                name="color"
                id="color"
                selectText="Select ..."
                className="select-color mb-2"
                sizing="large"
                style={{ color: color }}
                isDisabled={false}
                data={newArrayOfObject}
                value={color}
                onChange={handleChange}
            />
        </div>
    );
}
```

## Props

### For Label component:

| Prop      | Type   | Default    | Required | Description                                                     |
| --------- | ------ | ---------- | -------- | --------------------------------------------------------------- |
| label     | string |            | X        | Label, content displayed above the select component.            |
| htmlFor   | string |            | X        | Attribut htmlFor, must be the same as the select id.            |
| className | string | form-label |          | Add personal className or Bootstrap className.                  |
| style     | object |            |          | Add style-in-line for customize the label. All CSS are allowed. |

### For Select component:

| Prop       | Type     | Default         | Required | Description                                                                                                   |
| ---------- | -------- | --------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| name       | string   |                 | X        | Name of the select component.                                                                                 |
| id         | string   |                 | X        | Attribut id, must be the same as the label htmlFor.                                                           |
| selectText | string   |                 |          | Content of the first option visible when the select is closed. The value is empty.                            |
| className  | string   | form-select     |          | Add personal className or Bootstrap className.                                                                |
| sizing     | string   |                 |          | 3 sizes: by default medium when empty, or choose 'large' or 'small' custom selects'.                          |
| style      | object   |                 |          | Add style-in-line for customize the select menu.                                                              |
| isDisabled | boolean  | false           |          | when it's 'true' the first option (selectText prop) will be disabled.                                         |
| data       | array    | array of string | X        | Map an array of string for option list. For array of object change keys names with optionLabel & optionValue. |
| value      | string   |                 | X        | The value prop is required with the useState Hook for manage the value.                                       |
| onChange   | function | array of string | X        | A function 'onChange' for manage the change of value.                                                         |

## Dependencies

### React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Installation Create React App**

`npx create-react-app nameOfYourProject`

**Import React**

`import React, { useState } from 'react';`

### Bootstrap 5

Make sure _Bootstrap 5_ is installed in you project or required to install it and css needs to imported in project:

**Installation bootstrap**

`npm install bootstrap@5.1.3`

**Import bootstrap css**

`import 'bootstrap/dist/css/bootstrap.min.css';`

### PropTypes

I also use Proptypes:

**Installation Proptypes**

`npm install prop-types@15.8.1`

**Import Proptypes**

`import PropTypes from 'prop-types';`

## License

MIT Licensed. Copyright (c) Emilie-v11 2021.
