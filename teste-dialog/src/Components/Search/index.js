import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { MdSearch } from "react-icons/md";
import { connect } from "react-redux";

import * as searchArtist from "../../store/modules/artist/actions";

import {
  Container,
  DivSearch,
  InputSearch,
  AlignIcon,
  FormContainer,
  LabelSearch
} from "./styles";

class Search extends Component {
  render() {
    // const { search } = this.state;

    return (
      <Container>
        <FormContainer>
          <DivSearch>
            <LabelSearch>
              <InputSearch
                placeholder="Busque artistas..."
                value={"Alok"}
                onChange={e => searchArtist(e.target.value)}
              />
            </LabelSearch>
            <AlignIcon>
              <MdSearch size={26} color="#000" />
            </AlignIcon>
          </DivSearch>
        </FormContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // amount: state.cart.reduce((amount, product) => {
  //   amount[product.id] = product.amount;
  //   return amount;
  // }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(searchArtist, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
