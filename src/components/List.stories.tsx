import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import List from "./List";

export const Story: ComponentStory<typeof List> = (args) => <List {...args} />;

export default {
    title: 'List',
    component: List,
} as ComponentMeta<typeof List>;

export const EmptyList = Story.bind({});
EmptyList.args = {
    stringsArray: []
};

export const FilledList = Story.bind({});
FilledList.args = {
    stringsArray: ['1', '2', '3']
}

