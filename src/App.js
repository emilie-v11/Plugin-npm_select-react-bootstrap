import { useState } from 'react';
import SelectMenu from './components/SelectMenu';

const exampleArray = [
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

const data = [
    { name: 'pink', value: '#E260D2' },
    { name: 'red', value: '#FF0000' },
    { name: 'blue', value: '#3876AC' },
    { name: 'yellow', value: '#FBE468' },
    { name: 'gray', value: '#C4C4C4' },
    { name: 'orange', value: '#EC5B24' },
    { name: 'green', value: '#279E7A' },
    { name: 'purple', value: '#7360D2' },
];

function App() {
    const [animal, setAnimal] = useState('');
    const [color, setColor] = useState('');

    const handleChange = (e, inputName) => {
        inputName(e.target.value);
    };

    // const colorsNames = [];
    // const colorsRefs = [];
    // data.forEach(option => {
    //     colorsNames.push(option.colorName);
    //     colorsRefs.push(option.colorValue);
    // });

    // const colorRef = colorsRefs[colorsNames.indexOf(colorName)];

    // console.log(data);
    // console.log(colorName);
    // console.log(colorsNames);
    // console.log(colorsNames.indexOf(colorName));
    // console.log(colorsRefs[colorsNames.indexOf(colorName)]);

    console.log(color);
    console.log(animal);
    return (
        <div className="App container">
            <div className="container m-3">
                <div className="col w-100">
                    <SelectMenu
                        label="Animal"
                        ariaLabel="Select an animal"
                        inputName="animal"
                        idHtmlFor="animal"
                        selectText="Select ..."
                        data={exampleArray}
                        value={animal}
                        onChange={e => handleChange(e, setAnimal)}
                    />
                </div>
            </div>
            <div className="container m-3">
                <div className="col w-100">
                    <SelectMenu
                        label="Color"
                        ariaLabel="Select a color"
                        inputName="color"
                        idHtmlFor="color"
                        data={data}
                        onChange={e => handleChange(e, setColor)}
                        selectText="Select ..."
                        // labelClassName="text-dark"
                        // styleLabel={{ fontWeight: 'bold' }}
                        // selectClassName=""
                        // selectSizing=""
                        // styleSelect={{ color: color }}
                        // isDisabled={false}

                        // data={colorsNames}
                        // value={color}
                    />
                    {color !== '' && (
                        <div className="rounded-3 border p-2 " style={{ backgroundColor: color }}>
                            <p className="m-0 ">{color}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
