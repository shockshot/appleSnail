import React, { Component } from 'react';
import { Header, Footer} from 'components/common';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


const  menus = [
  {menu: '예약관리', link: '/reservation'},
  {menu: '매출관리', link: '/sales'},
  {menu: '고객관리', link: '/customer'},
  {menu: '샵관리', link: '/shop', children: [
    {menu: '상품관리', link: '/shop/service'},
    {menu: '샵정보관리', link: '/shop/info'},
    // {menu: '영업시간관리', link: '/shop/open'}
  ]},
]

class DefaultPageTemplate extends Component {

  constructor(props){
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  componentWillReceiveProps(nextProps){
    // console.log('loading', nextProps.loading)
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    return (
      <div>
        <Header menus={menus} userName="애플스네일" toggleMenu={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
        <main role="main">

          <div className="container">
            {this.props.children}
          </div>

        </main>
        <Footer/>
      </div>
    );
  }
}


// export default DefaultPageTemplate;

const mapStateToProps = ({loading}) => {
  return {
    loading: loading
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      // handleActions: bindActionCreators(salesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(DefaultPageTemplate);