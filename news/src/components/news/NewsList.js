import React from "react";
import PropTypes from "prop-types";
import {News} from "./News";
import "../../../stylesheets/NewsList.css";

export const NewsList = ({newsList = [], onSelect = f => f}) =>
    <section className="news-list">
        {newsList.map((news, id) =>
            <News key={id}
                   {...news}
                   onSelect={onSelect} />
        )}
    </section>


NewsList.propTypes = {
    newsList: PropTypes.array,
    onSelect: PropTypes.func
}
