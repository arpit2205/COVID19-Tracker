import React from "react"

import Cards from "./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import {fetchData} from "./api/index"

import styles from "./App.module.css"

import coronaImage from "./images/image.png"
import Footer from "./components/Footer/Footer"

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        // console.log(data)
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country: country})

        //set state
    }

    render() {
        const { data, country } = this.state

        return (
            <div className={styles.container}>
                <img className={styles.image} alt="COVID-19" src={coronaImage}/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                <Footer/>
            </div>
        )
    }
}

export default App