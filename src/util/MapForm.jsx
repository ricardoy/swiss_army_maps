import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { jsonToString } from 'webpack/lib/Stats';

class MapForm extends Component {  
    PlotTypeEnum = {
        POINTS: 1,
        POLYLINE: 2,
        BOUNDS: 3,
        SEGMENTS: 4,
        ENCODED_POLYLINE: 5
    }

    static defaultProps = {
        updatePositions: () => {},
        cleanMarkers: () => {}
    };

    constructor(props) {
        super(props)
        this.textarea = React.createRef()
        this.select_plot = React.createRef()
        this.generateListLatLng = this.generateListLatLng.bind(this)
        this.pattern = /(-?\d+(?:\.\d+)?).*?(-?\d+(?:\.\d+)?)(?:\s+(.*))?/
    }

    generateListLatLng = (s) => {
        let r = s.split('\n').filter((s) => {
            return this.pattern.exec(s) != null
        }).map((s, idx) => {
            let g = this.pattern.exec(s)
            let comment = idx
                
            if (typeof g[3] !== 'undefined' && g[3].trim() !== '') {
                comment = g[3]
            }
            // alert(comment)
            return {
                latitude: parseFloat(g[1]),
                longitude: parseFloat(g[2]),
                comment: comment
            }
        })

        if (r == null) {
            return []
        }

        return r
    }

    handleClick() {
        // alert(this.select_plot.current.value)

        if (this.select_plot.current.value == this.PlotTypeEnum.POINTS) {
            let latitudeLongitudeList = this.generateListLatLng(this.textarea.current.value)        
            this.props.updatePositions(latitudeLongitudeList)
        }
    }    
  
    render() {
      return (        
        <Form>
            
            {/* <CloseButton>Close</CloseButton> */}
            
            {/* <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group> */}

            {/* <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group> */}

            <Form.Group controlId="exampleForm.ControlTextarea1">
                {/* <Form.Label>Example textarea</Form.Label> */}
                <Form.Control as="textarea" rows="10" ref={this.textarea}/>
            </Form.Group>


            <Form.Group controlId="exampleForm.ControlSelect1">
                {/* <Form.Label>Example select</Form.Label> */}
                <Form.Control as="select" ref={this.select_plot}>
                    <option value={this.PlotTypeEnum.POINTS}>Points</option>
                    <option value={this.PlotTypeEnum.POLYLINE}>Polyline</option>
                    <option value={this.PlotTypeEnum.BOUNDS}>Bounds</option>
                    <option value={this.PlotTypeEnum.SEGMENTS}>Segments</option>
                    <option value={this.PlotTypeEnum.ENCODED_POLYLINE}>Encoded Polyline</option>
                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Button onClick={this.handleClick.bind(this)}>Map</Button>
                <Button onClick={this.props.cleanMarkers}>Clear</Button>
            </Form.Group>
            
        </Form>
        );
    }
}

export default MapForm;
  