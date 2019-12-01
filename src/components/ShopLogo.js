import React from "react";
import PropTypes from "prop-types";
import CircularIndeterminate from './CircularIndeterminate'

class ShopLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      loaded: false
    };

    this.timeout = setTimeout(function () {
      if (!this.state.loaded) {
        this.handleShopLogoError()
      }
    }.bind(this), 10000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleShopLogoLoad() {
    this.setState({loaded: true})
  }

  handleShopLogoError() {
    if (this.props.placeholder) {
      this.setState({ src: this.props.placeholder });
    }
  }

  render() {
    const { show } = this.props;
    const { loaded } = this.state;

    if (!show) {
      return <div className="shop-logo" />
    }

    if (!loaded) {
      return (
        <div className="shop-logo">
          <CircularIndeterminate />
          <img
            className="hidden-img"
            src={this.state.src}
            onLoad={this.handleShopLogoLoad.bind(this)}
            onError={this.handleShopLogoError.bind(this)}
          />
        </div>
      )
    }

    return (
      <div className="shop-logo">
        <img
          width="300"
          className={this.props.zoomEffect}
          src={this.state.src}
        />
      </div>
    );
  }
}

ShopLogo.defaultProps = {
  src: "",
  placeholder: "",
  disableContextMenu: false
};

ShopLogo.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disableContextMenu: PropTypes.bool
};

export default ShopLogo;
