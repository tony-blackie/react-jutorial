import React from 'react'

function removeArticleTheAndSpace(text) {
    return text.replace('the ', '')
}

export default class OneParameterString extends React.Component {
    render() {
        const firstString = 'the cat'
        const stringWithNoArticle = removeArticleTheAndSpace(firstString)

        const secondString = 'the dog'
        const secondStringWithNoArticle = removeArticleTheAndSpace(secondString)

        return (
            <div>
                <div>{stringWithNoArticle}</div>
                <div>{secondStringWithNoArticle}</div>
            </div>
        )
    }
}
