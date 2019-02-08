import React, {Component} from 'react';
import PartSelector from './PartSelector';
import {FEATURES} from '../assets/FEATURES';


// partKey === FEATURES[index] .... think about {FEATURES[i]}
class PartSelectorList extends Component {
    render() {
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    {Object.keys(FEATURES).map(partType => <PartSelector partKey={partType} selected={this.props.selected}/>)}                       
            </section>
        )};
    }

export default PartSelectorList;