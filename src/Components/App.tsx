import * as React from 'react';
import './App.css';

import StatelessComponent from './stateLess/stateless';
import Parent from './Parent/parent';

interface AppProps {
  name?: string;
}

interface AppState {
  age: number;
  toGrandChild: string;
  fromGrandChild: string;
}

class App extends React.Component<AppProps, AppState> {

  public static defaultProps = {
    name: 'Jaro',
  };

  constructor(props: AppProps) {
    console.log('Component constructor');
    super(props);
    this.state = {
      age: 31,
      toGrandChild: 'toGrandChild - 아직 안바뀜',
      fromGrandChild: 'fromGrandChild - 아직 안바뀜'
    };
    this._addAge = this._addAge.bind(this);
    this._reset = this._reset.bind(this);
    this._clickToGrandChild = this._clickToGrandChild.bind(this);
    this._clickFromGrandChild = this._clickFromGrandChild.bind(this);
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

  render() {

    const { name } = this.props;
    const { age } = this.state;

    return (
      <div className="App">
        <h1>이건 ClassComponent</h1>
        <h2>Hello {name} / {age}</h2>
        <button onClick={this._addAge}>나이추가</button>
        <button onClick={this._reset}>리셋</button>
        <h1>이건 StatelessComponent</h1>
        <StatelessComponent>Children</StatelessComponent>
        <h1>이건 P - M - C - GC</h1>

        <button onClick={this._clickToGrandChild}>GrandChild 의 값을 바꾸기</button>
        <Parent {...this.state} clickFromGrandChild={this._clickFromGrandChild} />
        <h3>{this.state.fromGrandChild}</h3>
      </div>
    );
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

  private _clickToGrandChild(): void {
    this.setState({
      toGrandChild: '그랜드 차일드의 값을 변경'
    });
  }

  private _clickFromGrandChild(): void {
    this.setState({
      fromGrandChild: '그랜드 차일드로 부터 값이 변경되었음.'
    });
  }
}

export default App;
