# select-react-bootstrap

A custom Select React Bootstrap, designed to behave like regular select form control, and developed to use with **React 16+** and **Bootstrap 5**.

# Installation

`npm i select-react-bootstrap --save`

# Usage

### Quick Usage

**Import _SelectMenu_ & _Label_ component**

`import SelectMenu from 'select-react-bootstrap';`
`import Label from 'select-react-bootstrap';`

### Use of callback function

```
const handleChange = (selectedOptions) => {
	console.log(selectedOptions);
}
<BootstrapSelect options={options} onChange={handleChange} />
```

## Optional key support in **{options}** JSON

| Key        | Type       | Default | Description                                                                                        |
| ---------- | ---------- | ------- | -------------------------------------------------------------------------------------------------- |
| isSelected | boolean    |         | It is used to set option selected default on component load.                                       |
| isDisabled | boolean    |         | It is used to set option disabled and user will unable to select.                                  |
| icon       | string     |         | Class name of an icon to show before option text. You can define multiple classes with icon class. |
| className  | string     |         | Add custom class to each option                                                                    |
| style      | style JSON |         | Add custom style attr to each option                                                               |

```

```

## **Props** support in BootstrapSelect



## Dependencies

Make sure _Bootstrap 5_ is installed in you project or required to install it and css needs to imported in project:

**Installation bootstrap**

`npm install bootstrap@5.1.3`

**Import bootstrap css**

`import 'bootstrap/dist/css/bootstrap.min.css';`

## License

MIT Licensed. Copyright (c) Emilie-v11 2021.