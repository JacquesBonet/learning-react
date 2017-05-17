import {NewsList} from '../../components/News/NewsList';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
    search: state.search
});

const dispatchAndMapActions = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, dispatchAndMapActions)(NewsList);