import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: 1}

  onBtnClick = () => {
    this.setState(prevState => ({
      isDarkMode: prevState.isDarkMode === 1 ? 0 : 1,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const changeCard = isDarkMode === 1 ? 'card1' : 'card2'
    const changeHead = isDarkMode === 1 ? 'head1' : 'head2'
    const btnTxt = isDarkMode === 1 ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="mainBg">
        <div className={changeCard}>
          <h1 className={changeHead}>Click To Change Mode</h1>
          <div className="center">
            <button className="btn" type="submit" onClick={this.onBtnClick}>
              {btnTxt}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
