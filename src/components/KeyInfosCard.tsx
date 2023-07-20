import type { KeyInfosDataObj } from "./KeyInfosCardsContainer";

/* 
React component that represent the key infos card
*/
function KeyInfosCard({ title,iconURL,value }: KeyInfosDataObj) {
    return (<article className="key-infos-card">
        <div className="key-infos-card__icon">
            <img src={iconURL} alt={`icône des ${title}`} />
        </div>

        <div className="key-infos-card__data">
            <h2>{value}</h2>
            <h3>{title}</h3>
        </div>
    </article>)
}

export default KeyInfosCard;