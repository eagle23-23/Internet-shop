import React from 'react';
import Items from './Components/Items.jsx';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Categories from './Components/Categories.jsx';
import ShowDesc from './Components/ShowDesc.jsx';

class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        order: [],
        currentItems: [],
        items: [{
          id: 1,
          title: 'Chair',
          category: 'facilities',
          price: 49.99,
          img: 'chair.jpg',
        },
        {
          id: 2,
          title: 'Table',
          category: 'facilities',
          price: 199.99,
          img: 'table.jpeg',
        },
        {
          id: 3,
          title: 'Sofa',
          category: 'facilities',
          price: 449.99,
          img: 'sofa.jpg',
        },
        {
          id: 4,
          title: 'TV',
          category: 'techno',
          price: 999.99,
          img: 'tv.jpg',
        },
        ],
        showDesc: false,
        fullDecs: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteFromOrder = this.deleteFromOrder.bind(this);
      this.sortByCat = this.sortByCat.bind(this);
      this.onShowDec = this.onShowDec.bind(this);
    }

    render(){
      return (
        <div className="container">
        <Header order={this.state.order} onDelete={this.deleteFromOrder}/>
        <Categories sortByCat={this.sortByCat}/>
        <Items onShowDec={this.onShowDec} items = {this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showDesc && <ShowDesc onAdd={this.addToOrder} onShowDec={this.onShowDec} item={this.state.fullDecs}/>}
      
        <Footer />
        </div>
      );
    }

    onShowDec(item){
      this.setState({fullDecs: item})
      this.setState({showDesc: !this.state.showDesc})
    }

    sortByCat(category){
      if(category === 'all'){
        this.setState({currentItems: this.state.items})
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })

    }
    deleteFromOrder(id){
      this.setState({order: this.state.order.filter(el => el.id !== id)})
    }

    addToOrder(item){
      let doesExist = false;
      this.state.order.forEach(el => {
        if(el.id == item.id){
          doesExist = true;
        }
      })
      if(!doesExist)
      this.setState({order: [...this.state.order, item]})
    }
}

export default App;

