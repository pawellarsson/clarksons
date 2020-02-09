import React from 'react';

const arrA = [
  {parent_id: 5, guid: 0, children: [{parent_id: 0, guid: 9}]},
  {parent_id: 3, guid: 1, children: [{parent_id: 7, guid: 8}]},
  {parent_id: 1, guid: 2, children: [{parent_id: 4, guid: 7}]},
  {parent_id: 6, guid: 3, children: [{parent_id: 2, guid: 6}]},
  {parent_id: 8, guid: 4, children: [{parent_id: 9, guid: 5}]},
  {parent_id: 9, guid: 5, children: [{parent_id: 8, guid: 4}]},
  {parent_id: 2, guid: 6, children: [{parent_id: 6, guid: 3}]},
  {parent_id: 4, guid: 7, children: [{parent_id: 1, guid: 2}]},
  {parent_id: 7, guid: 8, children: [{parent_id: 3, guid: 1}]},
  {parent_id: 0, guid: 9, children: [{parent_id: 5, guid: 0}]}
];

class Traversal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    if (!Number.isInteger(parseInt(this.props.ida))) this.flatten();
    else if (Number.isInteger(parseInt(this.props.ida)) && !parseInt(this.props.idb)) this.findID(this.props.ida);
    else this.insert(this.props.idb, this.props.idc);
  }

  flatten = () => {
    let newArr = arrA.reduce((o, g, i) => {
        Object.entries(g).reduce((t, [k, v]) => {
          t[`${k}${i + 1}`] = v;
          return t;
        }, o);

        return o;
      },
      {});

    console.log('flatten:', newArr);
  };

  findID = idToFind => {
    let foundID = arrA.find(arr => arr.parent_id === parseInt(idToFind));

    console.log('idToFind:', foundID)
  };

  insert = (idToFind, objToInsert) => {
    let newArr = arrA.map(arr => {
      if (arr.parent_id === parseInt(idToFind)) {
        arr.children.push(objToInsert);
        return arr;
      }
      else return arr;
    });

    console.log('newArr:', newArr)
  };

  render() {
    return (
      <div>
        Traversal
      </div>
    )
  }
}

export default Traversal;
