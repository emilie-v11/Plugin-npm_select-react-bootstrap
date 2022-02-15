import { useState } from 'react';
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

function App() {
    const [animal, setAnimal] = useState('');
    const [color, setColor] = useState('');

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

    const handleChange = (e, inputName) => {
        inputName(e.target.value);
    };

    console.log(color);
    console.log(animal);
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
                onChange={e => handleChange(e, setAnimal)}
            />

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
                onChange={e => handleChange(e, setColor)}
            />
            {color !== '' && (
                <div className="rounded-3 border p-2 " style={{ backgroundColor: color }}>
                    <p className="m-0 ">{color}</p>
                </div>
            )}
        </div>
    );
}

export default App;
