import React from "react";
import PropTypes from "prop-types";
import {News} from "./News";

const filteredNewsList = ( newsList, search) => {
    return newsList.filter((news, id) => {
            const {description, title} = news

            if (search.length === 0)   return true

            const found = search.reduce((acc, searchElem) => {
                return (description.indexOf(searchElem.value) !== -1 ||
                        title.indexOf(searchElem.value) !== -1) ?
                    acc + 1 :
                    acc
            }, 0)
            return found !== 0
        }
    )
}


export const NewsList = ({newsList = [], search = []}) =>
    <section className="row">
    {
        filteredNewsList(newsList, search).map( (news, id) =>
            <News key={id} {...news}/>
        )
    }
    </section>


NewsList.propTypes = {
    newsList: PropTypes.array,
    search: PropTypes.array
}
