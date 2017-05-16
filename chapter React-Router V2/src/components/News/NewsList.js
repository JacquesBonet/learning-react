import React from "react";
import PropTypes from "prop-types";
import {News} from "./News";

export const NewsList = ({newsList = [], onSelect = f => f}) =>
    <div className="row">
        {newsList.map((news, id) =>
            <News key={id} {...news}/>
        )}
    </div>


NewsList.propTypes = {
    newsList: PropTypes.array
}
