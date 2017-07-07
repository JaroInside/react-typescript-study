import * as React from 'react';
import './App.css';

export interface AppProps {
  name?: string;
}

export interface AppState {
  age: number;
}

class App extends React.Component<AppProps, AppState> {

  public static defaultProps = {
    name: 'Jaro'
  };

  constructor(props: AppProps) {
    console.log('Component constructor');
    super(props);
    this.state = {
      age: 31
    };
    this._addAge = this._addAge.bind(this);
    this._reset = this._reset.bind(this);
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }

  componentWillReceiveProps(nextProps: AppProps) {
    console.log(`App componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
    console.log(`App shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: AppProps, nextState: AppState) {
    console.log(`App componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    console.log(`App componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  private _addAge(): void {
    this.setState({
      age: this.state.age + 1
    });
  }

  private _reset(): void {
    this.setState({
      age: 31
    });
  }

  render() {

    const { name } = this.props;
    const { age } = this.state;

    return (
      <div className="App">
        <h2>Hello {name} / {age}</h2>
        <button onClick={this._addAge}>나이추가</button>
        <button onClick={this._reset}>리셋</button>
      </div>
    );
  }
}

export default App;
