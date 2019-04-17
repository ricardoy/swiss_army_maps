import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { jsonToString } from 'webpack/lib/Stats';

class MapForm extends Component {
    static defaultProps = {
        updatePosition: () => {},
        cleanMarkers: () => {}
    };

    constructor(props) {
        super(props);
        this.textarea = React.createRef();
        this.generateListLatLng = this.generateListLatLng.bind(this)
        this.pattern = /(-?\d+(?:\.\d+)?).*?(-?\d+(?:\.\d+)?)/
    }

    generateListLatLng = (s) => {
        let r = s.split('\n').filter((s) => {return this.pattern.exec(s) != null}).map((s) => {
            let g = this.pattern.exec(s);
            return [parseFloat(g[1]), parseFloat(g[2])]
        })

        if (r == null) {
            return []
        }
        return r
    }

    handleClick() {
        this.props.updatePosition(this.generateListLatLng(this.textarea.current.value))
    }    
  
    render() {
      return (        
        <Form>
            
            {/* <CloseButton>Close</CloseButton> */}
            {/* <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
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
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Button onClick={this.handleClick.bind(this)}>Ok</Button>
                <Button onClick={this.props.cleanMarkers}>Clear</Button>
            </Form.Group>
            
        </Form>
      );
    }
  }
  
  export default MapForm;
  