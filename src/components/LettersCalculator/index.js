// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeLettersCount = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div>
        <h1>Calculate the Letters you enter</h1>
        <form>
          <label htmlFor="phraseText">Enter the phrase</label>
          <input
            id="phraseText"
            onChange={this.onChangeLettersCount}
            placeholder="Enter the phrase"
            type="text"
          />
        </form>
        <p> No.of letters: {inputPhrase.length}</p>
        <div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
