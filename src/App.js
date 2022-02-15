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
    { colorName: 'pink', colorRef: '#E260D2' },
    { colorName: 'red', colorRef: '#FF0000' },
    { colorName: 'blue', colorRef: '#3876AC' },
    { colorName: 'yellow', colorRef: '#FBE468' },
    { colorName: 'gray', colorRef: '#C4C4C4' },
    { colorName: 'orange', colorRef: '#EC5B24' },
    { colorName: 'green', colorRef: '#279E7A' },
    { colorName: 'purple', colorRef: '#7360D2' },
];

function App() {
    const [animal, setAnimal] = useState('');
    const [color, setColor] = useState('');

    const newDataArray = data.map(color => {
        return {
            label: color.colorName,
            value: color.colorRef,
        };
    });

    console.log(data);
    console.log(newDataArray);

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
                        // data={data}
                        data={newDataArray}
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
