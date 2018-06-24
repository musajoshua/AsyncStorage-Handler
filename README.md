# AsyncStorage Handler

An improved form of working with [react-native](https://github.com/facebook/react-native) asyncstorage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This handler works strictly with react native. Works with both the

```javascript
create-react-app <app-name>
```
and the 

```javascript
react-native init <app-name>
```
of react native.


### Installing

To Install the handler 

```javascript
npm install asyncstoragehandler --save
```

## Usage

1.Import asyncstoragehandler:

```javascript
import Handler from 'asyncstoragehandler'
```
2.Set one of the states in the constructor to be the handler:

```javascript
constructor(){
  super();
  this.state = {
    Handler : new Handler()
  }
}
```

### Complete Example

A complete example on saving data.

```javascript
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Handler from "asyncstoragehandler";

export default class HandlerTexter extends Component {
  state = {
    Handler: new Handler()
  };

  _setData = async() => {
    let data = {
      title : "handler test"
    }
    this.state.Handler.setItem('@KEY',data)
    .then((value) => {
      if(value){
        alert("saved");
      }else{
         alert("not saved");
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._setData}>
          <Text>Save Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```

## Functions and Description

| Functions | Description |
| --- | --- |
| setItem(key: string, value: string) |  Persist a value to asyncStorage for a key. Returns a Promise object |
| setItemArray(key: string, value: string) | Persist an array value to asyncStorage for a key. Returns a Promise object |
| getItem(key: string) |  Gets an item (including array) for a key. Returns a Promise object |
| updateItem(key: string, value: string) |  Updates a value to asyncStorage for a key. Returns a Promise object |
| updateItemArray(key: string, index: integer, value: string) | Update an element from the array value for a key. Returns a Promise object |
| deleteItem(key: string) | Removes an item for a key . Returns a Promise object. |
| deleteItemArray(key: string, index: integer) |  Removes an element from the array value for a key. Returns a Promise object |
| clearAllItem(key: string) | Erases all Item for all clients, libraries, etc. Returns a Promise object. |


## Authors

* **[Musa Joshua](https://github.com/musatech)**

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* Hat tip to anyone whose code was used directly or indirectly.
* Inspiration
* etc
