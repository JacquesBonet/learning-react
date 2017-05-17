import News from '../../views/News/News';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {readNews} from '../../actions/news'

const mapStateToProps = (state) => ({
    search: state.search,
    news: state.news
});

const dispatchAndMapActions = (dispatch) => {
    return bindActionCreators({readNews}, dispatch);
};

export default connect(mapStateToProps, dispatchAndMapActions)(News);