import React from 'react'

import LastArticle from "./LastArticle";
import PopularArticles from "./LatestArticles";

const Content = () => {
    return (
        <div className="container h-screen flex">
            <LastArticle/>
            <PopularArticles/>
        </div>
    )
}

export default Content
