import  React, {Component} from 'react';
import  Aox from '../../hoc/Aox';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };
    render () {
        return (
            <Aox>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aox>
        )
    }
}
export default BurgerBuilder;