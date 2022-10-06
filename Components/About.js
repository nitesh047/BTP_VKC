import React from 'react'
import {
    ScrollView,
    StyleSheet,
    TextInput,

    Button,
    Alert,
    Pressable,
    View,
} from "react-native";
import { Text } from 'react-native-elements';

const About = () => {
    return (
        <ScrollView>
            {/* <Text style={{ padding: 5 }} h4>About VKC</Text> */}
            <Text style={{ fontSize: 18, textAlign: 'justify', padding: 5 }} >Diverse cultural heritage and completely different social-economic structure is also the hallmark
                of Indian villages. The traditional knowledge of the villagers may not be properly reached and
                utilized by the villagers today. This is a time when information explosions are taking place, new
                knowledge formed outside village communities is reaching to them with a potential of modern
                communication technology. As a result, our villages are finding it difficult to disseminate their
                traditional knowledge at a national level.</Text>
            <Text style={{ fontSize: 18, textAlign: 'justify', padding: 5 }}>
                Village Knowledge Centre (VKC) has a great role to play to achieve the 17 goals of Sustainable
                Development of United Nations (UN) 1 . The raw material used here for developing an integrated
                thinking and sustainable approach is ‘Knowledge’. The Centre aims to achieve these goals by
                giving valuable inputs to the human resource development of the village. So the VKC collects,
                process, organizes, stores, and disseminates traditional knowledge and explicit knowledge by
                using modern digital technologies and Information Communication Technologies. In addition,
                VKC has a variety of programs and plans in place to make the 2030 Agenda possible. VKC
                envisions activities for the benefit of all by organizing the entire population of a village. Village
                Knowledge Center (VKC) is a concept created by using the three words Village, Knowledge, and
                Centre 2 . The VKC is a Centre for introducing the unique traditional knowledge of the villagers to
                the new generation and the other as a Centre for imparting new knowledge on various subjects to
                the villagers on various aspects of their daily lives.
            </Text>
        </ScrollView>
    )
}

export default About