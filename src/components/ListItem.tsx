import React, {FunctionComponent} from 'react';
import styles from './ListItem.module.scss'

type Props = {
    stringsArrayItem: string
}

const ListItem: FunctionComponent<Props> = ({stringsArrayItem}) => {

    return(
        <li key={stringsArrayItem}>
            {stringsArrayItem}
        </li>
    )
}

export default ListItem;