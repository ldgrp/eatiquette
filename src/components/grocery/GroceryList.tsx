import * as React from 'react';
import { FlatList } from 'react-native';

import Item from './Item';

import { ListItem } from 'store/grocery/types';

interface Props {
    items: ListItem[],
}

const GroceryList: React.SFC<Props> = (props: Props) => {
    const { items } = props;
    return (
        <FlatList
            data={items}
            keyExtractor={i => String(i.id)}
            renderItem={({ item }) => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.item.name}
                    description={item.item.description}
                    done={item.item.done}
                    setDone={()=>{}}
                />
            )}
        />
    );
};

export default GroceryList;
