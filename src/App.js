import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import{ DISHES} from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <><div>
        <Navbar light color="secondary">
          <div className="container">
            <NavbarBrand href="/">Welcome to my Hotel</NavbarBrand>
          </div>
        </Navbar>
        <><h6 > Pick any item you want</h6></><Menu dishes={this.state.dishes} />
      </div>
    </>
    );
  }
}

export default App;
