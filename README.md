# AsyncStorage Handler

An improved form of working with asyncstorage setitem,getitem etc.

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

## Other Examples

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

## Authors

* **[Musa Joshua](https://github.com/musatech)**

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* Hat tip to anyone whose code was used directly or indirectly.
* Inspiration
* etc
