import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component {
//create datasource
componentWillMount() {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.props.libraries);
}

//return instance of ListItem
//passing state/props which is state.libraries
renderRow(props) {
    console.log('ListItem ListView running...');

  return <ListItem propsLibrary={props} />;
}
// listview is rn component
  render() {
    return (
      <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
return { libraries: state.libraries };
};
// purpose to take global state and take
// some properties and provide as props in librarylist
// libraries can be called anything
// state.libraries comes from libraries reducers

export default connect(mapStateToProps)(LibraryList);
// calls connect function and returns another
// function to return LibraryList
