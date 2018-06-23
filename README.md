# AsyncStorage Handler

An improved form of working with asyncstorage setitem,getitem etc.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This handler works strictly with react native. Works with both the

```
create-react-app <app-name>
```
and the 

```
react-native init <app-name>
```
of react native.


### Installing

To Install the handler 

```
npm install asyncstoragehandler --save
```

## Usage

1.Import asyncstoragehandler:

```
import Handler from 'asyncstoragehandler'
```
2.Set one of the states in the constructor to be the handler:

```
constructor(){
  super();
  this.state = {
    Handler : new Handler()
  }
}
```

### Complete Example

A complete example on saving data.

```
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

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Musa Joshua** - *Initial work* - [PurpleBooth](https://github.com/musatech)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used directly or indirectly.
* Inspiration
* etc
