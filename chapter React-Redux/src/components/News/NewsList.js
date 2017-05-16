import React from "react";
import PropTypes from "prop-types";
import {News} from "./News";
import "../../../scss/news/NewsList.scss";

export const NewsList = ({newsList = [], onSelect = f => f}) =>
    <section className="news-list">
        {newsList.map((news, id) =>
            <News key={id} {...news}/>
        )}
    </section>


NewsList.propTypes = {
    newsList: PropTypes.array
}
