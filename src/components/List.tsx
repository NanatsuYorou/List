import React, {FunctionComponent} from 'react';
import styles from './List.module.scss'
import ListItem from "./ListItem";

type Props = {
    stringsArray: string[]
}

const List: FunctionComponent<Props> = ({stringsArray}) => {
    if (Array.isArray(stringsArray) && stringsArray.length)
        return (
            <ul className={styles.list}>
                {
                    stringsArray.map((el) => {
                        return <ListItem stringsArrayItem={el} key={el}/>
                    })
                }
            </ul>
        )
    if(Array.isArray(stringsArray) && !stringsArray.length)
        return (
            <div className={styles.emptyList}>
                Список пуст...
            </div>
        )

    return <div>Ошибка на сервере: неверный тип данных</div>
}

export default List;