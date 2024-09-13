import React, {useContext} from 'react'
import { Text,View, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from './context/blogContext'

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)
    
    return (
        <View>
            <Text> Index screen </Text>
            <Button title='Add Post' onPress={() => addBlogPost()}/>
            <FlatList
               data={ data }
               keyExtractor={( blogPost ) => blogPost.name }
               renderItem={({ item }) => {
                return <Text>{ item.title }</Text>
               }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen