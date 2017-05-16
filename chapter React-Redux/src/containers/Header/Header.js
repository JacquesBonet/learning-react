import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {newSearch} from '../../actions/newSearch';

const mapStateToProps = (state) => ({
    search: state.search
});

const dispatchAndMapActions = (dispatch) => {
    return bindActionCreators({newSearch}, dispatch);
};

export default connect(mapStateToProps, dispatchAndMapActions)(Header);