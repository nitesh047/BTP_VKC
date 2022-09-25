import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    Button,
    Alert,
    Pressable,
    ScrollView,
    View,
} from "react-native";

const Geographical = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <Text></Text>
                <View style={styles.label}>
                    <Text>Geo-spatial location of the village</Text>
                </View>
                <TextInput
                    style={styles.input}
                // onChangeText={(text) => handleMultiInput(text, "Question1")}
                />
                <View style={styles.label}>
                    <Text>
                        Name of the State in which village falls.
                    </Text>
                </View>
                <TextInput
                    multiline
                    numberOfLines={3}
                    style={styles.inputMultiliner}
                    // onChangeText={(text) => handleMultiInput(text, "Question2")}
                    // value={formData}
                    name="2"
                />

                <View style={styles.label}>
                    <Text>Name of the District in which village falls.</Text>
                </View>
                <TextInput
                    multiline
                    numberOfLines={3}
                    style={styles.inputMultiliner}
                    // onChangeText={(text) => handleMultiInput(text, "Question3")}
                    // value={lastName}
                    name="3"
                />

                <View style={styles.label}>
                    <Text>
                        Please give names of some of the important/notable people associated
                        with the village and their generation, year, legend (line = path =
                        branch of the tree).
                    </Text>
                </View>
                <TextInput
                    multiline
                    name="4"
                    numberOfLines={4}
                    style={styles.inputMultiliner}
                // onChangeText={(text) => handleMultiInput(text, "Question4")}
                // value={lastName}
                />

                <View style={styles.label}>
                    <Text>
                        Name of the Gram Panchayat of the village.
                    </Text>
                </View>
                <TextInput
                    multiline
                    name="5"
                    numberOfLines={3}
                    style={styles.inputMultiliner}
                // onChangeText={(text) => handleMultiInput(text, "Question5")}
                // value={lastName}
                />
                <View style={styles.label}>
                    <Text>
                        Numbers of Anganwadi centres in the village?
                    </Text>
                </View>
                <TextInput
                    multiline
                    name="5"
                    numberOfLines={3}
                    style={styles.inputMultiliner}
                // onChangeText={(text) => handleMultiInput(text, "Question5")}
                // value={lastName}
                />
                <View style={styles.label}>
                    <Text>
                        Numbers of households in the village?
                    </Text>
                </View>
                <TextInput
                    multiline
                    name="5"
                    numberOfLines={3}
                    style={styles.inputMultiliner}
                // onChangeText={(text) => handleMultiInput(text, "Question5")}
                // value={lastName}
                />


                <Pressable
                    style={styles.button}
                // onPress={() => {
                //     postData();
                //     navigation.navigate("Data");
                // }}
                >
                    <Text style={styles.text}>Submit</Text>
                </Pressable>
            </ScrollView>
            {/* <Text>{firstName + lastName}</Text> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        // marginTop: 15,
        padding: 10,
        backgroundColor: "rgb(255, 255, 255)",
        borderBottomColor: "rgb(216, 216, 216)",
        boxShadow: "rgb(216 216 216) 0px 0px 0px",
    },
    input: {
        height: 40,
        width: "100%",
        margin: 12,
        // borderWidth: 1,
        padding: 10,
        // borderRadius: 5,
        // border: "none",
        borderBottomWidth: 1,
    },
    inputFocus: {
        borderWidth: 0,
    },
    inputMultiliner: {
        marginBottom: 10,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        width: "100%",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#f0f8ff",
        width: "100%",
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
    label: {
        width: "100%",
    },
});


export default Geographical