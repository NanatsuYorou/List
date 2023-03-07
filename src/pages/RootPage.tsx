import React, {FunctionComponent} from "react";
import styles from './RootPage.module.scss'
import List from "../components/List";
import Loader from "../components/Loader";
import ErrorPage from "./ErrorPage";
import UnauthorizedPage from "./UnauthorizedPage";
import ListPageProps from '../types/interfaces'

const RootPage: FunctionComponent<ListPageProps> = ({stringsArray, error, isPending, currentUser}) => {

    if (isPending) return <Loader/>
    if (error) return <ErrorPage errorMessage={error.message}/>
    if(!currentUser) return <UnauthorizedPage />
    if (stringsArray)
        return <div className={styles.container}>
            <List stringsArray={stringsArray}/>
        </div>;
    return null
};

export default RootPage;
