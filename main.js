class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: "Nike 2019",
          price: 259,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 2,
          name: "Adidas 2019",
          price: 359,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
        },
      ],
    };
  }

  inc = (id) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      updatedItems[id].quantity++;
      return { items: updatedItems };
    });
  };

  dec = (id) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      if (updatedItems[id].quantity > 1) {
        updatedItems[id].quantity--;
      } else {
        alert("Quantity can only take positive value");
      }
      return { items: updatedItems };
    });
  };

  total_price = () => {
    let result = 0;
    this.state.items.forEach((item) => {
      result += item.price * item.quantity;
    });
    return result;
  };

  render() {
    return (
      <div>
        {/* Render your UI components here */}
      </div>
    );
  }
}

ReactDOM.render(<Cart />, document.getElementById("root"));
