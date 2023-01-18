import {Button, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {functions, init} from "./firebase";

export default function App() {
    const [loading, setLoading] = useState<Boolean>(true)
    const [temperature, setTemperature] = useState<string>("")

    useEffect(() => {
        init().then(() =>
            setLoading(false)
        )
    })

    const getWeather = () => {
        setLoading(true);
        console.log("loading", loading);

        fetch("https://us-central1-sequel-interview-9b911.cloudfunctions.net/getWeather")
        .then((res) => {
            return res.json()
        })
        .then((res)=>{
            setTemperature(`The current temperature is ${res.temperature} C`)
        })
        .catch((err)=>{
            setTemperature("Something went wrong, please try again later")
            console.error(err)
        })
        .finally(() => setLoading(false))
    }

    return (
        <View style={styles.container}>
            {loading ?
            <Text>{"Loading..."}</Text> :
            <>
                <Button 
                    onPress={getWeather}
                    title={"Get Weather"}
                />
                {temperature && <Text>{temperature}</Text>}
            </>
        }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
