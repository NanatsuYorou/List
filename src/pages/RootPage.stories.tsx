import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RootPage from "./RootPage";

export const Story: ComponentStory<typeof RootPage> = (args) => <RootPage {...args} />;

export default {
    title: 'RootPage',
    component: RootPage,
} as ComponentMeta<typeof RootPage>;

export const UnauthorizedListPage = Story.bind({});
UnauthorizedListPage.args = {
    stringsArray: undefined,
    error: undefined,
    isPending: false,
    currentUser: ''
};

export const ListIsPending = Story.bind({});
ListIsPending.args = {
    stringsArray: undefined,
    error: undefined,
    isPending: true,
    currentUser: 'Nanatsu Yorou'
}

export const ListIsRecieved = Story.bind({});
ListIsRecieved.args = {
    stringsArray: ['1', '2', '3'],
    error: undefined,
    isPending: false,
    currentUser: 'Nanatsu Yorou'
}
export const ListIsEmpty = Story.bind({});
ListIsEmpty.args = {
    stringsArray: [],
    error: undefined,
    isPending: false,
    currentUser: 'Nanatsu Yorou'
}
export const ErrorRecieved = Story.bind({});
ErrorRecieved.args = {
    stringsArray: undefined,
    error: {message: "An error occured while fetching", name: "Error 500"},
    isPending: false,
    currentUser: 'Nanatsu Yorou'
}



