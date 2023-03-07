import React, {FunctionComponent} from 'react';
import styles from './ErrorPage.module.scss'

type Props = {
    errorMessage: string
}
const ErrorPage: FunctionComponent<Props> = ({errorMessage}) => {
    return(
        <div className={styles.container}>
            <p className={styles.errorText}>{errorMessage}</p>
        </div>
    )
}

export default ErrorPage;