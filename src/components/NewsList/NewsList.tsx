import React from "react";
import styles from './NewsList.module.css'
import { NewsListProps } from "./NewsList.interface";
import { NewsCardProps } from "../NewsCard/NewsCard.interface";
import NewsCard from "../NewsCard";


const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <div className={styles.newsList}>
            {
                news.map((item: NewsCardProps) =>
                    <div><NewsCard {...item} /></div>)
            }
        </div>
    )
}

export default NewsList