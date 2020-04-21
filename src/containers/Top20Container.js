import React from 'react';
import Header from '../components/Header'

class Top20Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }
    render() { 
        return (
            <div>
            <Header title="Top 20 Uk From Itunes"/>
            </div>
          );
    }
}
 
export default Top20Container;