import { useState } from 'react';
import Label from './lib/components/Label';
import SelectMenu from './lib/components/SelectMenu';

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
            optionLabel: color.colorName,
            optionValue: color.colorRef,
        };
    });

    console.log(data);
    console.log(newDataArray);

    const handleChange = (e, inputName) => {
        inputName(e.target.value);
    };

    console.log(color);
    console.log(animal);
    return (
        <div className="App container">
            <div className="container m-3">
                <div className="col w-100">
                    <Label
                        label="Animal"
                        htmlFor="animal"
                        labelClassName="text-dark"
                        labelStyle={{ fontWeight: 'bold' }}
                    />
                    <SelectMenu
                        selectName="animal"
                        idHtmlFor="animal"
                        selectText="Select ..."
                        isDisabled={true}
                        data={exampleArray}
                        value={animal}
                        onChange={e => handleChange(e, setAnimal)}
                    />
                </div>
            </div>
            <div className="container m-3">
                <div className="col w-100">
                    <Label
                        label="Color"
                        htmlFor="color"
                        labelClassName="text-dark"
                        labelStyle={{ fontWeight: 'bold' }}
                    />
                    <SelectMenu
                        selectName="color"
                        idHtmlFor="color"
                        selectText="Select ..."
                        selectClassName=""
                        selectSizing=""
                        selectStyle={{ color: color }}
                        // isDisabled={false}

                        data={newDataArray}
                        value={color}
                        onChange={e => handleChange(e, setColor)}
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
